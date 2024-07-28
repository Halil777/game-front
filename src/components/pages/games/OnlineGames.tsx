import useSWR from "swr";
import { FC } from "react";
import { Card } from "antd";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./online.css";

// Define interfaces for the data structure
interface GameAsset {
  url: string;
}

interface GameItem {
  id: number;
  title_en: string;
  assets: GameAsset[];
  location: string;
}

// Define the fetcher function for SWR
const fetcher = async (url: string) => {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Token not found in localStorage");
  }

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      page: 1,
      size: 20,
      sort: "sort_by_date_desc",
      location: "GLOBAL",
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    console.error("API Error:", error);
    throw new Error(error.message || "An error occurred while fetching data");
  }

  return response.json();
};

// Hardcoded URL for testing
const baseURL = "http://88.218.60.127:5678";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const OnlineGames: FC = () => {
  const { data, error } = useSWR<{ games: GameItem[] }>(
    `${baseURL}/game/admin/get-games`,
    fetcher
  );
  const [ref, inView] = useInView({ triggerOnce: true });

  if (error) {
    console.error("Error loading games:", error);
    return <div>Error loading games: {error.message}</div>;
  }
  if (!data) return <div>Loading...</div>;

  const games = Array.isArray(data?.games) ? data.games : [];
  const globalGames = games.filter((game) => game.location === "GLOBAL");

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
        {globalGames.map((game, index) => (
          <motion.div
            key={game.id}
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={cardVariants}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="game-card"
          >
            <Card
              hoverable
              cover={
                <img
                  alt={game.title_en}
                  src={`${baseURL}/${game.assets[0]?.url}`}
                />
              }
            >
              <Card.Meta
                title={<span className="game-title">{game.title_en}</span>}
              />
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default OnlineGames;
