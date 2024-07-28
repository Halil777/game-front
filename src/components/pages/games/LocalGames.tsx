import { FC } from "react";
import useSWR from "swr";
import { Row, Col, Card } from "antd";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./localgames.css";
import { BASE_URL } from "../../../api/baseUrl";

interface GameAsset {
  url: string;
}

interface GameItem {
  id: number;
  title_en: string;
  assets: GameAsset[];
  location: string;
}

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
      location: "LOCAL",
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

const LocalGames: FC = () => {
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
  const localGames = games.filter((game) => game.location === "LOCAL");

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
          ref={ref}
        >
          <Row gutter={[16, 16]}>
            {localGames.map((game, index) => (
              <Col key={game.id} xs={24} sm={12} md={8} lg={6}>
                <motion.div
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={cardVariants}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    hoverable
                    cover={
                      <img
                        alt={game.title_en}
                        src={`${BASE_URL}/${game.assets[0]?.url}`}
                        style={{ height: "200px", objectFit: "cover" }}
                      />
                    }
                  >
                    <Card.Meta
                      title={
                        <span className="game-title">{game.title_en}</span>
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
