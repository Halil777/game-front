import { FC } from "react";
import { WindowsOutlined } from "@ant-design/icons"; // Import Windows icon from Ant Design
import "./teamspeak.css";

const TeamSpeakHero: FC = () => {
  return (
    <div className="teamspeak-hero">
      <h1>Teamspeak 3</h1>
      <p>Лучшее решение для голосового общения в играх!</p>
      <button className="download-button">
        <WindowsOutlined className="windows-icon" />
        Скачат на PC
      </button>
    </div>
  );
};

export default TeamSpeakHero;
