import React from "react";
import PropTypes from "prop-types";
import { startCase } from "lodash";
import { Accordion, AccordionItem } from "./accordion";

export default function ProgramAccount({ account, children }) {
  const items = [
    <AccordionItem key="description" title="Description" open={true}>
      <div className="accordion-item-padding">{children}</div>
    </AccordionItem>,
    ...(account.seeds
      ? [
          <ProgramAccountSeeds
            key="seeds"
            seeds={account.seeds}
          ></ProgramAccountSeeds>,
        ]
      : []),
    <AccordionItem key="fields" title="Fields">
      <div className="accordion-table-overflow">
        <div className="accordion-table-header">
          <div style={{ width: "10rem" }}>Field</div>
          <div style={{ width: "5rem" }}>Offset</div>
          <div style={{ width: "5rem" }}>Size</div>
          <div style={{ flex: "1", minWidth: "25rem" }}>Description</div>
        </div>
        <ProgramAccountFields fields={account.fields}></ProgramAccountFields>
      </div>
    </AccordionItem>,
  ];

  return <Accordion items={items}></Accordion>;
}

ProgramAccount.propTypes = {
  account: PropTypes.object.isRequired,
  children: PropTypes.array,
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
        <div className="accordion-table-header">
          <div style={{ width: "10rem" }}>Seed</div>
          <div style={{ width: "10rem" }}>Type</div>
          <div style={{ flex: "1", minWidth: "25rem" }}>Description</div>
        </div>
        {seeds.map((seed) => (
          <div className="accordion-table-row" key={seed.name}>
            <div style={{ width: "10rem", fontWeight: "700" }}>
              {startCase(seed.name)}
            </div>
            <div style={{ width: "10rem" }}>
              <div dangerouslySetInnerHTML={{ __html: renderType(seed) }} />
            </div>
            <div style={{ flex: "1", minWidth: "25rem" }}>
              <div
                dangerouslySetInnerHTML={{ __html: renderDescription(seed) }}
              />
            </div>
          </div>
        ))}
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
  const typesAsString = types.length > 0 ? `<i>(${types.join(", ")})<i> ` : "";

  const indentWidth = 2 * indent;
  const titleWidth = 10 - indentWidth;
  const classes = ["accordion-table-row"];

  if (indent > 0) {
    classes.push("accordion-table-nested-row");
  }

  return (
    <>
      <div className={classes.join(" ")} key={field.name}>
        <div
          className="accordion-table-row-indent"
          style={{ width: `${indentWidth}rem` }}
        ></div>
        <div style={{ width: `${titleWidth}rem`, fontWeight: "700" }}>
          {startCase(field.name)}
        </div>
        <div style={{ width: "5rem" }}>{field.offset ?? offset}</div>
        <div style={{ width: "5rem" }}>{field.size ?? "~"}</div>
        <div style={{ flex: "1", minWidth: "25rem" }}>
          <div
            style={{ display: "inline" }}
            dangerouslySetInnerHTML={{
              __html: typesAsString + field.description,
            }}
          />
        </div>
      </div>
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
