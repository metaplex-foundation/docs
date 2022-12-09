export const resolveAccount = (idl, account) => {
  const idlAccount = idl.accounts.find(({ name }) => name === account);
  const docsAccount = idl.docs.accounts[account] ?? {};

  if (!idlAccount) {
    throw new Error(`Account [${account}] not found in IDL`);
  }

  return {
    seeds: docsAccount.seeds ?? [],
    fields: resolveFields(idl, idlAccount),
  };
};

export const resolveInstruction = (idl, instruction) => {
  const idlInstruction = idl.instructions.find(
    ({ name }) => name === instruction
  );
  const docsInstruction = idl.docs.instructions[instruction] ?? {};

  if (!idlInstruction) {
    throw new Error(`Instruction [${instruction}] not found in IDL`);
  }

  const resolvedArgs = resolveFields(idl, {
    kind: "struct",
    fields: idlInstruction.args,
  });

  return { ...idlInstruction, resolvedArgs, ...docsInstruction };
};

export const resolveFields = (idl, structType) => {
  const type = resolveTypes(idl, structType);

  if (type?.kind !== "struct" && type?.type?.kind !== "struct") {
    throw new Error("Can only resolve fields of struct types");
  }

  const next = (type) => {
    if (type.kind === "struct") {
      return type.fields.map((field) => {
        const optional = isOptional(field);
        const { type, docs, ...rest } = next(field);
        const sanitizedDocs = { ...docs };
        delete sanitizedDocs.fields;
        delete sanitizedDocs.type;
        const nestedFields = Array.isArray(type) ? { fields: type } : { type };
        return { optional, ...nestedFields, ...sanitizedDocs, ...rest };
      });
    }

    if (type.name && type.type) {
      return { ...type, type: next(type.type) };
    }

    if (type.option) {
      return next(type.option);
    }

    if (type.vec) {
      return next(type.vec);
    }

    return type;
  };

  const resolvedFields = next(type);

  return Array.isArray(resolvedFields)
    ? resolvedFields
    : resolvedFields.type ?? [];
};

export const resolveTypes = (idl, type) => {
  const next = (type, context = {}) => {
    if (type.name && type.type) {
      const docs =
        idl.docs.accounts?.[type.name] ??
        idl.docs.types?.[type.name] ??
        undefined;

      const subType = next(type.type, { docs });
      const mergedDocs = { ...subType.docs, ...docs };

      return { ...type, docs: mergedDocs, type: subType };
    }

    if (type.kind === "struct") {
      return {
        ...type,
        docs: context?.docs,
        fields: type.fields.flatMap((field) => {
          const nextField = next(field, context);
          const docs = context?.docs?.fields?.[field.name] ?? nextField.docs;

          if (!docs?.flatten || nextField.type?.kind !== "struct") {
            return [{ ...nextField, docs }];
          }

          return nextField.type.fields;
        }),
      };
    }

    if (type.defined) {
      const docs = idl.docs.types?.[type.defined] ?? {};
      const definedType = idl.types.find(({ name }) => name === type.defined);
      const subType = next(definedType.type, { docs });

      return {
        ...subType,
        typeName: type.defined,
        docs,
      };
    }

    if (type.option) {
      const subType = next(type.option, context);
      return { ...type, docs: subType.docs, option: subType };
    }

    if (type.vec) {
      return { ...type, vec: next(type.vec, context) };
    }

    return type;
  };

  return next(type);
};

export const isOptional = (type) => {
  const next = (type) => {
    if (type.name && type.type) {
      return next(type.type);
    }

    if (type.option) {
      return true;
    }

    if (type.vec) {
      return next(type.vec);
    }

    return false;
  };

  return next(type);
};
