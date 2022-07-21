import React from "react";
import PropTypes from "prop-types";
import { startCase, flatMap } from "lodash";
import Link from "@docusaurus/Link";
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
  let types = [];
  if (field.optional) {
    types.push(
      <Link href="/programs/#optional-fields" key="optional">
        Optional
      </Link>
    );
  }
  if (field.indicative) {
    types.push(
      <Link href="/programs/#indicative-fields" key="indicative">
        Indicative
      </Link>
    );
  }

  types = flatMap(types, (type) => [type, ", "]).slice(0, -1);

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
          {types.length > 0 && (
            <span style={{ fontStyle: "italic" }}>({types}) </span>
          )}
          <span dangerouslySetInnerHTML={{ __html: field.description ?? "" }} />
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
