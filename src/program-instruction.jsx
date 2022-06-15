import React from "react";
import PropTypes from "prop-types";
import { startCase } from "lodash";
import Link from "@docusaurus/Link";
import { Accordion, AccordionItem } from "./accordion";
import { resolveInstruction } from "./program-utils";
import { ProgramFields } from "./program-fields";

export default function ProgramInstruction({ idl, instruction, children }) {
  instruction = resolveInstruction(idl, instruction);

  return (
    <Accordion>
      <AccordionItem key="description" title="Description" open={true}>
        <div className="accordion-item-padding">
          {children}
          <ProgramInstructionDetails
            instruction={instruction}
          ></ProgramInstructionDetails>
        </div>
      </AccordionItem>
      <ProgramInstructionAccounts
        key="accounts"
        accounts={instruction.accounts}
      ></ProgramInstructionAccounts>
      {instruction.resolvedArgs.length > 0 && (
        <ProgramFields
          fields={instruction.resolvedArgs}
          title="Arguments"
          firstColumn="Argument"
        ></ProgramFields>
      )}
    </Accordion>
  );
}

ProgramInstruction.propTypes = {
  idl: PropTypes.object.isRequired,
  instruction: PropTypes.string.isRequired,
  children: PropTypes.any,
};

function ProgramInstructionDetails({ instruction }) {
  return (
    <div className="program-instruction-details">
      <ul>
        <li>
          <strong>Name</strong>: <code>{instruction.name}</code>
        </li>
        <li>
          <strong>Discriminator</strong>:{" "}
          <code>{instruction.discriminant.value}</code> (
          {instruction.discriminant.type})
        </li>
      </ul>
    </div>
  );
}

ProgramInstructionDetails.propTypes = {
  instruction: PropTypes.object.isRequired,
};

function ProgramInstructionAccounts({ accounts }) {
  return (
    <AccordionItem title="Accounts">
      <div className="accordion-table-overflow">
        <table className="accordion-table">
          <thead>
            <tr>
              <th style={{ minWidth: "10rem" }}>Name</th>
              <th>Type</th>
              <th style={{ minWidth: "25rem" }}>Description</th>
            </tr>
          </thead>
          <tbody>
            {accounts.map((account) => (
              <tr key={account.name}>
                <th>{startCase(account.name)}</th>
                <td>
                  <div style={{ display: "flex" }}>
                    <Link
                      href="/programs/understanding-programs#signer-andor-writable-accounts"
                      className={[
                        "program-instruction-account-icon",
                        account.isMut ? "active" : "",
                      ].join(" ")}
                      title={account.isMut ? "Writable" : "Not Writable"}
                    >
                      <WritableIcon></WritableIcon>
                    </Link>
                    <Link
                      href="/programs/understanding-programs#signer-andor-writable-accounts"
                      className={[
                        "program-instruction-account-icon",
                        account.isSigner ? "active" : "",
                      ].join(" ")}
                      title={account.isSigner ? "Signer" : "Not a Signer"}
                    >
                      <SignerIcon></SignerIcon>
                    </Link>
                  </div>
                </td>
                <td>
                  <div dangerouslySetInnerHTML={{ __html: account.desc }} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AccordionItem>
  );
}

ProgramInstructionAccounts.propTypes = {
  accounts: PropTypes.array.isRequired,
};

function WritableIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      viewBox="0 0 256 256"
    >
      <rect width="256" height="256" fill="none"></rect>
      <path
        d="M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      ></path>
      <line
        x1="136"
        y1="64"
        x2="192"
        y2="120"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      ></line>
      <polyline
        points="164 200 204 160 192 120"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      ></polyline>
      <line
        x1="44"
        y1="156"
        x2="100"
        y2="212"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      ></line>
    </svg>
  );
}

function SignerIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      viewBox="0 0 256 256"
    >
      <rect width="256" height="256" fill="none"></rect>
      <path
        d="M176,128a240.3,240.3,0,0,1-17.9,91.2"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      ></path>
      <path
        d="M163.8,96A48,48,0,0,0,80,128a142.6,142.6,0,0,1-18,69.7"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      ></path>
      <path
        d="M96,37.5A94.4,94.4,0,0,1,128,32a96,96,0,0,1,96,96,293.3,293.3,0,0,1-7.1,64"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      ></path>
      <path
        d="M23.3,168A95.5,95.5,0,0,0,32,128,95.4,95.4,0,0,1,64,56.5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      ></path>
      <path
        d="M110.6,208c-2.1,4.4-4.3,8.8-6.6,13"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      ></path>
      <path
        d="M128,128a189.6,189.6,0,0,1-6.1,48"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      ></path>
    </svg>
  );
}
