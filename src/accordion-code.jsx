import React from "react";
import PropTypes from "prop-types";
import { AccordionItem } from "./accordion";

export function AccordionCode({ children, title = "Code", open = false }) {
  return (
    <AccordionItem title={title} open={open}>
      <div className="accordion-item-no-padding">{children}</div>
    </AccordionItem>
  );
}

AccordionCode.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
  open: PropTypes.bool,
};
