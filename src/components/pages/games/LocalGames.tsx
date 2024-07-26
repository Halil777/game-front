import { FC } from "react";
import useSWR from "swr";
import { Row, Col, Card } from "antd";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./localgames.css";
import { BASE_URL } from "../../../api/baseUrl";

// Define the fetcher function for SWR
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const LocalGames: FC = () => {
  const { data, error } = useSWR(`${BASE_URL}/game/get-games`, fetcher);
  const [ref, inView] = useInView({ triggerOnce: true });

  if (error) return <div>Error loading games</div>;
  if (!data) return <div>Loading...</div>;

  // Filter games that are LOCAL
  const localGames = data.games.filter(
    (game: any) => game.location === "LOCAL"
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
          ref={ref}
        >
          <h2>Popular Local Games</h2>
          <Row gutter={[16, 16]}>
            {localGames.map((game: any, index: number) => (
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
                      />
                    }
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
                          {game.title_en}
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
