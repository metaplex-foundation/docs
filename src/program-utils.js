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
  const docsAccount = idl.docs[account] ?? {};

  if (!idlAccount) {
    throw new Error(`Account [${account}] not found in IDL`);
  }

  const resolvedAccount = { seeds: [], fields: [] };
  const resolvedType = resolveFields(idl, idlAccount);

  console.log({ idlAccount, docsAccount, resolvedAccount, resolvedType });

  return resolvedAccount;
};

export const resolveFields = (idl, idlAccount) => {
  const type = flattenTypes(expandTypesWithDocs(idl, idlAccount));

  if (type.type.kind !== "struct") {
    throw new Error("Can only resolve fields of struct types");
  }

  return walkType(type, (type, next) => {
    if (type.name && type.type) {
      return next(type.type);
    }

    if (type.kind === "struct") {
      return type.fields.map((field) => next(field, true));
    }

    return next(type);
  });
};

export const flattenTypes = (typeWithDocs) => {
  return walkType(typeWithDocs, (type, next) => {
    if (type.kind === "struct") {
      return {
        ...type,
        fields: type.fields.flatMap((field) => {
          const nextField = next(field);

          if (!nextField.docs?.flatten || nextField.type?.kind !== "struct") {
            return [nextField];
          }

          return nextField.type.fields;
        }),
      };
    }

    return next(type);
  });
};

export const expandTypesWithDocs = (idl, type) => {
  return walkType(type, (type, next, context) => {
    if (type.name && type.type) {
      const docs = idl.docs.accounts[type.name] ?? undefined;
      return next(type, { docs });
    }

    if (type.kind === "struct") {
      return {
        ...type,
        docs: context?.docs,
        fields: type.fields.map((field) => {
          const nextField = next(field, context);
          const docs = context?.docs?.fields?.[field.name] ?? nextField.docs;

          return { ...nextField, docs };
        }),
      };
    }

    if (type.defined) {
      const docs = idl.docs.types?.[type.defined] ?? {};
      const nextType = next(findType(idl, type.defined).type, { docs }, true);

      return {
        ...nextType,
        typeName: type.defined,
        docs,
      };
    }

    return next(type);
  });
};

export const walkType = (initialType, callback, initialContext = {}) => {
  const next = (type, context, evaluateRoot = false) => {
    if (evaluateRoot) {
      return callback(type, next, context);
    }

    if (type.name && type.type) {
      return {
        ...type,
        type: callback(type.type, next, context),
      };
    }

    if (type.kind === "struct") {
      return {
        ...type,
        fields: type.fields.map((field) => callback(field, next, context)),
      };
    }

    if (type.defined) {
      return { ...type, defined: callback(type.defined, next, context) };
    }

    if (type.option) {
      return { ...type, option: callback(type.option, next, context) };
    }

    if (type.vec) {
      return { ...type, vec: callback(type.vec, next, context) };
    }

    return callback(type, (type) => type, context);
  };

  return callback(initialType, next, initialContext);
};
