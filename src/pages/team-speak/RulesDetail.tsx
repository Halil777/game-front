import React from "react";
import { useTranslation } from "react-i18next";
import "./rules.css";

const RulesDetail: React.FC = () => {
  const { t } = useTranslation();

  // Explicitly cast the result to an array of strings
  const rulesList = t("teamspeak.rules_list", {
    returnObjects: true,
  }) as string[];

  // Check if it's an array
  if (!Array.isArray(rulesList)) {
    return <div>Error: rules_list is not an array.</div>;
  }

  return (
    <div className="rules-detail-container">
      <h1 className="rules-detail-heading">{t("teamspeak.rules_heading")}</h1>
      <p className="rules-detail-description">
        <ol>
          {rulesList.map((rule, index) => (
            <li key={index}>{rule}</li>
          ))}
        </ol>
      </p>
    </div>
  );
};

export default RulesDetail;
