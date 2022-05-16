import React, { useState } from "react";
import PropTypes from "prop-types";

export function Accordion({ items }) {
  return <div className="accordion">{items}</div>;
}

Accordion.propTypes = {
  items: PropTypes.array,
};

export function AccordionItem({
  open,
  title,
  actions,
  keepAlive = true,
  children,
}) {
  const [opened, setOpened] = useState(open);
  const shouldRenderChildren = opened || keepAlive;

  return (
    <div
      className={[
        "accordion-item",
        opened ? "accordion-item-opened" : "accordion-item-closed",
      ].join(" ")}
    >
      <div className="accordion-item-header" onClick={() => setOpened(!opened)}>
        <h3>
          <Caret opened={opened}></Caret>
          <span>{title}</span>
        </h3>
        {actions}
      </div>
      <div className="accordion-item-content">
        {shouldRenderChildren && children}
      </div>
    </div>
  );
}

AccordionItem.propTypes = {
  open: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.any,
  actions: PropTypes.any,
  keepAlive: PropTypes.bool,
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
