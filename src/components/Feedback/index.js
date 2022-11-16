import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import styles from "./styles.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

const VotedYes = (formUrl) => {
  return (
    <>
      <span>We are glad you like it 😀</span>
      <br />
      <small>
        <a href={formUrl.formUrl} target="_blank" rel="noreferrer">
          Do you want to give additional Feedback?
        </a>
      </small>
    </>
  );
};

const VotedNo = (formUrl) => {
  return (
    <>
      <span>We will try to improve 😕</span>
      <br />
      <small>
        <a href={formUrl.formUrl} target="_blank" rel="noreferrer">
          Do you want to give additional Feedback?
        </a>
      </small>
    </>
  );
};

VotedYes.propTypes = {
  formUrl: PropTypes.string,
};

VotedNo.propTypes = {
  formUrl: PropTypes.string,
};

Feedback.propTypes = {
  resource: PropTypes.string,
};

export default function Feedback({ resource }) {
  const [reaction, setReaction] = useState(null);

  const isReacted = reaction === "Yes" || reaction === "No";

  const handleReaction = (params) => {
    setReaction(params.icon);
  };

  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
      //sometimes HR crashes for unknown reasons.
      try {
        // eslint-disable-next-line no-undef
        window.HappyReact.init({
          onReaction: handleReaction,
        });
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const reportString = resource.replaceAll("/", "-");

  const { siteConfig } = useDocusaurusContext();
  const { customFields } = siteConfig;

  const formUrl = customFields?.feedbackUrl + "#" + reportString;

  return (
    <>
      <h3 className={styles.title}>Was this page helpful?</h3>
      {!isReacted ? (
        <div
          className={styles.widget}
          data-hr-token={customFields?.happyReactToken}
          data-hr-resource={reportString}
          data-hr-styles={JSON.stringify({
            container: styles.container,
            grid: styles.grid,
            cell: styles.cell,
            reaction: styles.reaction,
            footer: styles.footer,
          })}
          data-hr-strategy="instant"
        />
      ) : reaction === "No" ? (
        <VotedNo formUrl={formUrl} />
      ) : (
        <VotedYes formUrl={formUrl} />
      )}
    </>
  );
}
