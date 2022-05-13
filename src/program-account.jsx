import React, { useState } from "react";
import PropTypes from "prop-types";
import { startCase } from "lodash";

export default function ProgramAccount({ children }) {
  const json = {
    fields: [
      {
        name: "key",
        size: 1,
        description:
          "The discriminator of the account. The Token Metadata program uses an enum to differentiate the accounts it provides.",
      },
      {
        name: "update_authority",
        size: 32,
        description: "The public key that is allowed to update this account.",
      },
      {
        name: "mint",
        size: 32,
        description: "The public key of the Mint Account it derives from.",
      },
      {
        name: "name",
        size: 36,
        description:
          'The on-chain name of the token, limited to 32 bytes. For instance "Degen Ape #1 ".',
      },
      {
        name: "symbol",
        size: 14,
        description:
          'The on-chain symbol of the token, limited to 10 bytes. For instance "DAPE".',
      },
      {
        name: "uri",
        size: 204,
        description:
          "The URI of the token, limited to 200 bytes. " +
          "<strong>This URI points to an off-chain JSON file that contains additional data following a certain standard.</strong> " +
          "You can learn more about this JSON standard here. The JSON file can either be stored in a traditional server " +
          "(e.g. using AWS) or using a permanent storage solution such as using Arweave.",
      },
      {
        name: "seller_fee_basis_points",
        size: 2,
        indicative: true,
        description:
          "The royalties shared by the creators in basis points — i.e. <code>550</code> means <code>5.5%</code>. " +
          "Whilst this field is used by virtually all NFT marketplaces, it is not enforced by the Token Metadata program itself.",
      },
      {
        name: "creators",
        description: "TODO",
      },
      {
        name: "primary_sale_happened",
        size: 1,
        indicative: true,
        description:
          "A boolean indicating if the token has already been sold at least once. " +
          "Once flipped to <code>True</code>, it cannot ever be <code>False</code> again. " +
          "This field can affect the way royalties are distributed.",
      },
      {
        name: "is_mutable",
        size: 1,
        description:
          "A boolean indicating if the Metadata Account can be updated. " +
          "Once flipped to <code>False</code>, it cannot ever be <code>True</code> again.",
      },
      {
        name: "edition_nonce",
        size: 2,
        optional: true,
        description:
          "A nonce used to verify the edition number of printed NFTs. " +
          "It will only be set on Edition NFTs and not Master Edition NFTs.",
      },
      {
        name: "token_standard",
        size: 2,
        optional: true,
        description:
          "This enum captures the fungibility of the token. You can [learn more about the token standard here](TODO).",
      },
      {
        name: "collection",
        size: 34,
        optional: true,
        description: "TODO",
      },
      {
        name: "uses",
        size: 18,
        optional: true,
        description:
          'This field can make NFTs usable. Meaning you can load it with a certain amount of "uses" ' +
          "and use it until it has run out. You can [learn more about using NFTs here](TODO).",
      },
    ],
  };

  let offset = 0;

  const items = [
    <AccordionItem key="description" title="Description" open={true}>
      <div className="accordion-item-content">{children}</div>
    </AccordionItem>,
    <AccordionItem key="fields" title="Fields">
      <div className="accordion-table-overflow">
        <div className="accordion-table-header">
          <div style={{ width: "10rem" }}>Field</div>
          <div style={{ width: "5rem" }}>Offset</div>
          <div style={{ width: "5rem" }}>Size</div>
          <div style={{ flex: "1", minWidth: "25rem" }}>Description</div>
        </div>
        {json.fields.map((field) => {
          const fieldOffset = offset;
          if (typeof offset === "number" && typeof field.size === "number") {
            offset += field.size;
          } else {
            offset = "~";
          }

          const types = [];
          if (field.optional) {
            types.push("Optional");
          }
          if (field.indicative) {
            types.push("Indicative");
          }

          return (
            <div className="accordion-table-row" key={field.name}>
              <div style={{ width: "10rem", fontWeight: "700" }}>
                {startCase(field.name)}
              </div>
              <div style={{ width: "5rem" }}>{fieldOffset}</div>
              <div style={{ width: "5rem" }}>{field.size ?? "~"}</div>
              <div style={{ flex: "1", minWidth: "25rem" }}>
                <i>{types.length > 0 ? `(${types.join(", ")}) ` : ""}</i>
                <div
                  style={{ display: "inline" }}
                  dangerouslySetInnerHTML={{ __html: field.description }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </AccordionItem>,
  ];

  return <Accordion items={items}></Accordion>;
}

ProgramAccount.propTypes = {
  children: PropTypes.array,
};

function Accordion({ items }) {
  return <div className="accordion">{items}</div>;
}

Accordion.propTypes = {
  items: PropTypes.array,
};

function AccordionItem({ open, title, actions, children }) {
  const [opened, setOpened] = useState(open);

  return (
    <div className={["accordion-item", opened ? "opened" : "closed"].join(" ")}>
      <div className="accordion-item-header" onClick={() => setOpened(!opened)}>
        <h3>
          <Caret opened={opened}></Caret>
          <span>{title}</span>
        </h3>
        {actions}
      </div>
      {opened && children}
    </div>
  );
}

AccordionItem.propTypes = {
  open: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.any,
  actions: PropTypes.any,
};

function Caret({ opened }) {
  if (opened) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="192"
        height="192"
        fill="currentColor"
        viewBox="0 0 256 256"
      >
        <rect width="256" height="256" fill="none"></rect>
        <path d="M215.4,92.9A8,8,0,0,0,208,88H48a8,8,0,0,0-7.4,4.9,8.4,8.4,0,0,0,1.7,8.8l80,80a8.2,8.2,0,0,0,11.4,0l80-80A8.4,8.4,0,0,0,215.4,92.9Z"></path>
      </svg>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="192"
      height="192"
      fill="currentColor"
      viewBox="0 0 256 256"
    >
      <rect width="256" height="256" fill="none"></rect>
      <path d="M181.7,122.3l-80-80a8.4,8.4,0,0,0-8.8-1.7A8,8,0,0,0,88,48V208a8,8,0,0,0,4.9,7.4,8.5,8.5,0,0,0,3.1.6,8.3,8.3,0,0,0,5.7-2.3l80-80A8.1,8.1,0,0,0,181.7,122.3Z"></path>
    </svg>
  );
}

Caret.propTypes = {
  opened: PropTypes.bool,
};
