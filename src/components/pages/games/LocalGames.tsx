import { FC } from "react";
import { Row, Col, Card } from "antd";
import "./localgames.css";

const games = [
  {
    title: "Game Title 1",
    image: "/images/321467.jpg",
  },
  {
    title: "Game Title 2",
    image: "/images/321467.jpg",
  },
  {
    title: "Game Title 3",
    image: "/images/321467.jpg",
  },
  {
    title: "Game Title 4",
    image: "/images/321467.jpg",
  },
  {
    title: "Game Title 1",
    image: "/images/321467.jpg",
  },
  {
    title: "Game Title 2",
    image: "/images/321467.jpg",
  },
  {
    title: "Game Title 3",
    image: "/images/321467.jpg",
  },
  {
    title: "Game Title 4",
    image: "/images/321467.jpg",
  },
];

const LocalGames: FC = () => {
  return (
    <div className="local-games-container">
      <div className="container">
        <div className="intro-section">
          <h1>Local Games</h1>
          <p>
            Local games are those that are installed and played on a local
            machine or network. They offer high performance and the ability to
            play offline without the need for an internet connection. Enjoy a
            wide variety of local games ranging from single-player adventures to
            multiplayer LAN games.
          </p>
        </div>
        <div className="games-section">
          <h2>Popular Local Games</h2>
          <Row gutter={[16, 16]}>
            {games.map((game, index) => (
              <Col key={index} xs={24} sm={12} md={8} lg={6}>
                <Card
                  hoverable
                  cover={<img alt={game.title} src={game.image} />}
                >
                  <Card.Meta
                    title={
                      <span
                        style={{
                          color: "#fff",
                          fontSize: "24px",
                          fontWeight: "bold",
                        }}
                      >
                        {game.title}
                      </span>
                    }
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default LocalGames;
