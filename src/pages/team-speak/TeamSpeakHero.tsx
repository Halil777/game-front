import { FC } from "react";
import { WindowsOutlined } from "@ant-design/icons"; // Import Windows icon from Ant Design
import "./teamspeak.css";
import { useTranslation } from "react-i18next";

const TeamSpeakHero: FC = () => {
  const { t } = useTranslation();
  return (
    <div className="teamspeak-hero">
      <h1>Teamspeak</h1>
      <p>{t("teamspeak.best_solution")}</p>
      <button className="download-button">
        <WindowsOutlined className="windows-icon" />
        {t("teamspeak.download_pc")}
      </button>
    </div>
  );
};

export default TeamSpeakHero;
