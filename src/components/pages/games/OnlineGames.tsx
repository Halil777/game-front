import { FC } from "react";
import { Card } from "antd";
import "./online.css";

// Example data for games (replace with actual data)
const games = [
  {
    id: 1,
    title: "Online Game 1",
    imageUrl: "/images/321467.jpg",
  },
  {
    id: 2,
    title: "Online Game 2",
    imageUrl: "/images/321467.jpg",
  },
  {
    id: 3,
    title: "Online Game 3",
    imageUrl: "/images/321467.jpg",
  },
  {
    id: 4,
    title: "Online Game 4",
    imageUrl: "/images/321467.jpg",
  },
  {
    id: 1,
    title: "Online Game 1",
    imageUrl: "/images/321467.jpg",
  },
  {
    id: 2,
    title: "Online Game 2",
    imageUrl: "/images/321467.jpg",
  },
  {
    id: 3,
    title: "Online Game 3",
    imageUrl: "/images/321467.jpg",
  },
  {
    id: 4,
    title: "Online Game 4",
    imageUrl: "/images/321467.jpg",
  },
];

const OnlineGames: FC = () => {
  return (
    <div className="online-games-container">
      <h2 className="games-heading">Online Games</h2>
      <p className="games-description">
        Explore and enjoy multiplayer online games.
      </p>
      <div className="games-cards">
        {games.map((game) => (
          <Card
            key={game.id}
            hoverable
            cover={<img alt={game.title} src={game.imageUrl} />}
            className="game-card"
          >
            <Card.Meta
              title={<span className="game-title">{game.title}</span>}
            />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OnlineGames;
