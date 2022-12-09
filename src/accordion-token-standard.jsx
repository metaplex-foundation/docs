import React from "react";
import PropTypes from "prop-types";
import { AccordionItem } from "./accordion";

export function AccordionTokenStandard({
  fields,
  title = "Standard",
  open = false,
}) {
  return (
    <AccordionItem title={title} open={open}>
      <div className="accordion-table-overflow">
        <table className="accordion-table">
          <thead>
            <tr>
              <th>Field</th>
              <th>Type</th>
              <th style={{ minWidth: "25rem" }}>Description</th>
            </tr>
          </thead>
          <tbody>
            <AccordionTokenStandardRows
              fields={fields}
            ></AccordionTokenStandardRows>
          </tbody>
        </table>
      </div>
    </AccordionItem>
  );
}

AccordionTokenStandard.propTypes = {
  fields: PropTypes.array,
  title: PropTypes.string,
  open: PropTypes.bool,
};

export function AccordionTokenStandardRows({ fields, indent = 0 }) {
  return fields.map((field) => {
    return (
      <AccordionTokenStandardRow
        key={field.name}
        field={field}
        indent={indent}
      ></AccordionTokenStandardRow>
    );
  });
}

AccordionTokenStandardRows.propTypes = {
  fields: PropTypes.array,
  indent: PropTypes.number,
};

function AccordionTokenStandardRow({ field, indent = 0 }) {
  return (
    <>
      <tr
        className={indent > 0 ? "accordion-table-nested-row" : ""}
        key={field.name}
      >
        <th>
          <div style={{ marginLeft: `${2 * indent}rem` }}>{field.name}</div>
        </th>
        <td>{field.type}</td>
        <td>
          <div
            style={{ display: "inline" }}
            dangerouslySetInnerHTML={{ __html: field.description ?? "" }}
          />
        </td>
      </tr>
      {field.fields && (
        <AccordionTokenStandardRows
          fields={field.fields}
          indent={indent + 1}
        ></AccordionTokenStandardRows>
      )}
    </>
  );
}

AccordionTokenStandardRow.propTypes = {
  field: PropTypes.object,
  indent: PropTypes.number,
};
