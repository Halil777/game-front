import { FC } from "react";
import { Row, Col, Card } from "antd";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./localgames.css";

const games = [
  { title: "Game Title 1", image: "/images/game1.jpg" },
  { title: "Game Title 2", image: "/images/game2.jpg" },
  { title: "Game Title 3", image: "/images/game3.jpg" },
  { title: "Game Title 4", image: "/images/game4.jpg" },
  { title: "Game Title 5", image: "/images/game5.jpg" },
  { title: "Game Title 6", image: "/images/game6.jpg" },
  { title: "Game Title 7", image: "/images/game7.jpg" },
  { title: "Game Title 8", image: "/images/game8.jpg" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const LocalGames: FC = () => {
  const gameRefs = Array.from({ length: games.length }, () =>
    useInView({ triggerOnce: true })
  );

  return (
    <div className="local-games-container">
      <div className="container">
        <motion.div
          className="intro-section"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1>Local Games</h1>
          <p>
            Local games are those that are installed and played on a local
            machine or network. They offer high performance and the ability to
            play offline without the need for an internet connection. Enjoy a
            wide variety of local games ranging from single-player adventures to
            multiplayer LAN games.
          </p>
        </motion.div>

        <motion.div
          className="games-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2>Popular Local Games</h2>
          <Row gutter={[16, 16]}>
            {games.map((game, index) => (
              <Col key={index} xs={24} sm={12} md={8} lg={6}>
                <motion.div
                  ref={gameRefs[index][0]}
                  initial="hidden"
                  animate={gameRefs[index][1] ? "visible" : "hidden"}
                  variants={cardVariants}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
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
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </div>
    </div>
  );
};

export default LocalGames;
