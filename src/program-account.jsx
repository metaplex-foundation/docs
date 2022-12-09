import React from "react";
import PropTypes from "prop-types";
import { startCase } from "lodash";
import { Accordion, AccordionItem } from "./accordion";
import { ProgramFields } from "./program-fields";
import { resolveAccount } from "./program-utils";

export default function ProgramAccount({ idl, account, children }) {
  account = resolveAccount(idl, account);

  return (
    <Accordion>
      <AccordionItem title="Description" open={true}>
        <div className="accordion-item-padding">{children}</div>
      </AccordionItem>
      {account.seeds && (
        <ProgramAccountSeeds seeds={account.seeds}></ProgramAccountSeeds>
      )}
      <ProgramFields fields={account.fields}></ProgramFields>
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
