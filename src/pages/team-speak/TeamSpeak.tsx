import { FC } from "react";
import TeamSpeakHero from "./TeamSpeakHero";
import TeamSpeakRules from "./TeamSpeakRules";
import TeamSpeakServer from "./TeamSpeakServer";

const TeamSpeak: FC = () => {
  return (
    <div>
      <TeamSpeakHero />
      <TeamSpeakRules />
      <TeamSpeakServer />
    </div>
  );
};

export default TeamSpeak;
