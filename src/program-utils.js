export const findAccount = (idl, account) => {
  return idl.accounts.find(({ name }) => name === account);
};

export const findInstruction = (idl, instruction) => {
  return idl.instructions.find(({ name }) => name === instruction);
};

export const findType = (idl, type) => {
  return idl.types.find(({ name }) => name === type);
};

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

export const resolveFields = (idl, idlAccount) => {
  const type = resolveTypes(idl, idlAccount);

  if (type.type.kind !== "struct") {
    throw new Error("Can only resolve fields of struct types");
  }

  const next = (type) => {
    if (type.name && type.type) {
      if (type.type.kind === "struct") {
        return next(type.type);
      }

      return {
        ...type,
        type: next(type.type),
      };
    }

    if (type.kind === "struct") {
      return type.fields.map((field) => {
        const nextField = next(field);
        return { ...nextField.docs, ...nextField };
      });
    }

    if (type.defined) {
      return { ...type, defined: next(type.defined) };
    }

    if (type.option) {
      return { ...type, option: next(type.option) };
    }

    if (type.vec) {
      return { ...type, vec: next(type.vec) };
    }

    return type;
  };

  return next(type);
};

export const resolveTypes = (idl, type) => {
  const next = (type, context = {}) => {
    if (type.name && type.type) {
      const docs = idl.docs.accounts[type.name] ?? undefined;

      return {
        ...type,
        type: next(type.type, { docs }),
      };
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
      const nextType = next(findType(idl, type.defined).type, { docs });

      return {
        ...nextType,
        typeName: type.defined,
        docs,
      };
    }

    if (type.option) {
      return { ...type, option: next(type.option, context) };
    }

    if (type.vec) {
      return { ...type, vec: next(type.vec, context) };
    }

    return type;
  };

  return next(type);
};
