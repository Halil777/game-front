import { FC } from "react";
import { Card } from "antd";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./online.css";

// Example data for games (replace with actual data)
const games = [
  {
    id: 1,
    title: "Online Game 1",
    imageUrl: "/images/game8.jpg",
  },
  {
    id: 2,
    title: "Online Game 2",
    imageUrl: "/images/game7.jpg",
  },
  {
    id: 3,
    title: "Online Game 3",
    imageUrl: "/images/game6.jpg",
  },
  {
    id: 4,
    title: "Online Game 4",
    imageUrl: "/images/game5.jpg",
  },
  {
    id: 5,
    title: "Online Game 5",
    imageUrl: "/images/game4.jpg",
  },
  {
    id: 6,
    title: "Online Game 6",
    imageUrl: "/images/game3.jpg",
  },
  {
    id: 7,
    title: "Online Game 7",
    imageUrl: "/images/game2.jpg",
  },
  {
    id: 8,
    title: "Online Game 8",
    imageUrl: "/images/game1.jpg",
  },
];

const OnlineGames: FC = () => {
  // Initialize an array to store refs and inView states for each game card
  const gameRefs = games.map(() => useInView({ triggerOnce: true }));

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="online-games-container">
      <h2 className="games-heading">Online Games</h2>
      <p className="games-description">
        Explore and enjoy multiplayer online games.
      </p>
      <motion.div
        className="games-cards"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {games.map((game, index) => (
          <motion.div
            key={game.id}
            ref={gameRefs[index].ref} // Access the ref from useInView
            initial="hidden"
            animate={gameRefs[index].inView ? "visible" : "hidden"}
            variants={cardVariants}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="game-card"
          >
            <Card
              hoverable
              cover={<img alt={game.title} src={game.imageUrl} />}
            >
              <Card.Meta
                title={<span className="game-title">{game.title}</span>}
              />
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default OnlineGames;
