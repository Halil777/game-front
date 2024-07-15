import { FC } from "react";
import { Card } from "antd";
import "./about.css";

const About: FC = () => {
  return (
    <div className="about-container">
      <div className="about-description">
        <h2>Welcome to GameHub</h2>
        <p>
          GameHub is your ultimate destination for everything related to online
          gaming. Whether you're a player looking for the best multiplayer
          games, a developer seeking powerful server solutions, or a community
          member wanting to connect with like-minded gamers, GameHub has you
          covered.
        </p>
      </div>
      <h2 style={{ textAlign: "center", marginTop: "60px" }}>Statistics</h2>
      <div className="about-stats">
        <Card className="stat-card">
          <h3>Registered Users</h3>
          <p>500,000+</p>
        </Card>
        <Card className="stat-card">
          <h3>Active Players Daily</h3>
          <p>50,000+</p>
        </Card>
        <Card className="stat-card">
          <h3>Best Online Games</h3>
          <p>100+</p>
        </Card>
      </div>

      <h2 style={{ textAlign: "center", marginTop: "60px" }}>Our Partners</h2>

      <div className="partner-images">
        <img src="/images/321467.jpg" alt="Partner 1" />
        <img src="/images/321467.jpg" alt="Partner 2" />
        <img src="/images/321467.jpg" alt="Partner 3" />
        <img src="/images/321467.jpg" alt="Partner 4" />
      </div>
    </div>
  );
};

export default About;
