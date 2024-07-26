import { FC } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./rules.css";

const TeamSpeakRules: FC = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleButtonClick = () => {
    navigate("/teamspeak-rules"); // Navigate to the new page
  };

  return (
    <div className="rules-container">
      <div className="rules-card">
        <img src="/images/teamspeak.png" alt="TeamSpeak" />
        <div className="rules-card-content">
          <h2>Prawila ispolzowaniya</h2>
          <p>
            В случае нарушения правил, возможна полная блокировка учётной записи
            на платформе Unite Gaming. Пожалуйста, изучите правила до
            использования наших сервисов!!!
          </p>
          <button className="learn-button" onClick={handleButtonClick}>
            Изучить правила
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamSpeakRules;
