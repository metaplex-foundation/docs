import React from "react";
import PropTypes from "prop-types";
import { startCase } from "lodash";
import { Accordion, AccordionItem } from "./accordion";
import { resolveAccount } from "./program-utils";

export default function ProgramAccount({ idl, account, children }) {
  account = resolveAccount(idl, account);

  return (
    <Accordion>
      <AccordionItem key="description" title="Description" open={true}>
        <div className="accordion-item-padding">{children}</div>
      </AccordionItem>
      {account.seeds && (
        <ProgramAccountSeeds
          key="seeds"
          seeds={account.seeds}
        ></ProgramAccountSeeds>
      )}
      <AccordionItem key="fields" title="Fields">
        <div className="accordion-table-overflow">
          <table className="accordion-table">
            <thead>
              <tr>
                <th style={{ minWidth: "10rem" }}>Field</th>
                <th>Offset</th>
                <th>Size</th>
                <th style={{ minWidth: "25rem" }}>Description</th>
              </tr>
            </thead>
            <tbody>
              <ProgramAccountFields
                fields={account.fields}
              ></ProgramAccountFields>
            </tbody>
          </table>
        </div>
      </AccordionItem>
    </Accordion>
  );
}

ProgramAccount.propTypes = {
  idl: PropTypes.object.isRequired,
  account: PropTypes.string.isRequired,
  children: PropTypes.any,
};

function ProgramAccountSeeds({ seeds }) {
  const renderType = (seed) => {
    switch (seed.type) {
      case "literal":
        return "Literal: <code>" + seed.value + "</code>";
      case "program":
        return "Program ID";
      default:
        return startCase(seed.type);
    }
  };

  const renderDescription = (seed) => {
    switch (seed.type) {
      case "program":
        return seed.description ?? "The public key of the program.";
      default:
        return seed.description;
    }
  };

  return (
    <AccordionItem title="Seeds">
      <div className="accordion-table-overflow">
        <table className="accordion-table">
          <thead>
            <tr>
              <th style={{ minWidth: "10rem" }}>Seed</th>
              <th style={{ minWidth: "10rem" }}>Type</th>
              <th style={{ minWidth: "25rem" }}>Description</th>
            </tr>
          </thead>
          <tbody>
            {seeds.map((seed) => (
              <tr key={seed.name}>
                <th>{startCase(seed.name)}</th>
                <td>
                  <div dangerouslySetInnerHTML={{ __html: renderType(seed) }} />
                </td>
                <td>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: renderDescription(seed),
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AccordionItem>
  );
}

ProgramAccountSeeds.propTypes = {
  seeds: PropTypes.array.isRequired,
};

function ProgramAccountFields({ fields, offset = 0, indent = 0 }) {
  return fields.map((field) => {
    const fieldOffset = offset;
    if (typeof offset === "number" && typeof field.size === "number") {
      offset += field.size;
    } else {
      offset = "~";
    }

    return (
      <ProgramAccountField
        key={field.name}
        field={field}
        offset={fieldOffset}
        indent={indent}
      ></ProgramAccountField>
    );
  });
}

ProgramAccountFields.propTypes = {
  fields: PropTypes.array,
  offset: PropTypes.any,
  indent: PropTypes.number,
};

function ProgramAccountField({ field, offset = 0, indent = 0 }) {
  const types = [];
  if (field.optional) {
    types.push(
      '<a href="/programs/understanding-programs#optional-fields">Optional</a>'
    );
  }
  if (field.indicative) {
    types.push(
      '<a href="/programs/understanding-programs#indicative-fields">Indicative</a>'
    );
  }
  const typesAsString = types.length > 0 ? `<i>(${types.join(", ")})</i> ` : "";

  return (
    <>
      <tr
        className={indent > 0 ? "accordion-table-nested-row" : ""}
        key={field.name}
      >
        <th>
          <div style={{ marginLeft: `${2 * indent}rem` }}>
            {startCase(field.name)}
          </div>
        </th>
        <td>{field.offset ?? offset}</td>
        <td>{field.size ?? "~"}</td>
        <td>
          <div
            style={{ display: "inline" }}
            dangerouslySetInnerHTML={{
              __html: typesAsString + field.description,
            }}
          />
        </td>
      </tr>
      {field.fields && (
        <ProgramAccountFields
          fields={field.fields}
          offset={offset}
          indent={indent + 1}
        ></ProgramAccountFields>
      )}
    </>
  );
}

ProgramAccountField.propTypes = {
  field: PropTypes.object,
  offset: PropTypes.any,
  indent: PropTypes.number,
};
