import { FC } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./rules.css";
import { useTranslation } from "react-i18next";

const TeamSpeakRules: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate(); // Initialize useNavigate

  const handleButtonClick = () => {
    navigate("/teamspeak-rules"); // Navigate to the new page
  };

  return (
    <div className="rules-container">
      <div className="rules-card">
        <img
          src="/images/photo_2024-07-29_16-01-44-removebg-preview.png"
          alt="TeamSpeak"
        />
        <div className="rules-card-content">
          <h2>{t("teamspeak.terms_title")}</h2>
          <button className="learn-button" onClick={handleButtonClick}>
            {t("teamspeak.learn_rules")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamSpeakRules;
