import React from "react";
import PropTypes from "prop-types";
import { startCase } from "lodash";
import { AccordionItem } from "./accordion";

export function ProgramFields({
  fields,
  title = "Fields",
  firstColumn = "Field",
}) {
  return (
    <AccordionItem title={title}>
      <div className="accordion-table-overflow">
        <table className="accordion-table">
          <thead>
            <tr>
              <th style={{ minWidth: "10rem" }}>{firstColumn}</th>
              <th>Offset</th>
              <th>Size</th>
              <th style={{ minWidth: "25rem" }}>Description</th>
            </tr>
          </thead>
          <tbody>
            <ProgramFieldRows fields={fields}></ProgramFieldRows>
          </tbody>
        </table>
      </div>
    </AccordionItem>
  );
}

ProgramFields.propTypes = {
  fields: PropTypes.array,
  title: PropTypes.string,
  firstColumn: PropTypes.string,
};

export function ProgramFieldRows({ fields, offset = 0, indent = 0 }) {
  return fields.map((field) => {
    const fieldOffset = offset;
    if (typeof offset === "number" && typeof field.size === "number") {
      offset += field.size;
    } else {
      offset = "~";
    }

    return (
      <ProgramField
        key={field.name}
        field={field}
        offset={fieldOffset}
        indent={indent}
      ></ProgramField>
    );
  });
}

ProgramFieldRows.propTypes = {
  fields: PropTypes.array,
  offset: PropTypes.any,
  indent: PropTypes.number,
};

function ProgramField({ field, offset = 0, indent = 0 }) {
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
              __html: typesAsString + (field.description ?? ""),
            }}
          />
        </td>
      </tr>
      {field.fields && (
        <ProgramFieldRows
          fields={field.fields}
          offset={offset}
          indent={indent + 1}
        ></ProgramFieldRows>
      )}
    </>
  );
}

ProgramField.propTypes = {
  field: PropTypes.object,
  offset: PropTypes.any,
  indent: PropTypes.number,
};
