import { FC } from "react";
import { Row, Col, Card, Layout } from "antd";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { WindowsOutlined, AppleOutlined } from "@ant-design/icons";
import "./home.css";
import News from "../news/News";
import { useTranslation } from "react-i18next";
import useSWR from "swr";
import { BASE_URL } from "../../api/baseUrl";
import "../../components/pages/games/localgames.css";

const { Content } = Layout;

interface GameAsset {
  url: string;
}

interface GameItem {
  id: number;
  title_en: string;
  assets: GameAsset[];
  location: string;
  site_url: string; // Add this line
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

const baseURL = "http://88.218.60.127:5678";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Home: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Animation controls for different sections
  const heroControls = useAnimation();
  const featuredGamesControls = useAnimation();
  const communityControls = useAnimation();

  // Intersection observers for triggering animations
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [featuredGamesRef, featuredGamesInView] = useInView({
    triggerOnce: true,
  });
  const [communityRef, communityInView] = useInView({ triggerOnce: true });

  console.log(communityRef);

  // Trigger animations when elements are in view
  if (heroInView) heroControls.start({ opacity: 1, y: 0 });
  if (featuredGamesInView) featuredGamesControls.start({ opacity: 1, y: 0 });
  if (communityInView) communityControls.start({ opacity: 1, y: 0 });

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
    <Content className="home-container">
      <div className="container">
        <motion.div
          className="hero-section"
          initial={{ opacity: 0, y: -50 }}
          animate={heroControls}
          ref={heroRef}
          transition={{ duration: 0.5 }}
        >
          <h1>{t("home.title")}</h1>
          <p>{t("home.subtitle")}</p>
          <div className="hero-actions">
            <button className="button-style" onClick={() => navigate("/login")}>
              {t("home.get_started")}
            </button>
            <div className="available-on">
              <span>{t("home.avaliable")}:</span>
              <AppleOutlined
                className="platform-icon"
                onClick={() =>
                  window.open(
                    "http://88.218.60.127:5678/client/elektron-sport.dmg",
                    "_blank"
                  )
                }
              />
              <WindowsOutlined
                className="platform-icon"
                onClick={() =>
                  window.open(
                    "http://88.218.60.127:5678/client/elektron-sport.msi",
                    "_blank"
                  )
                }
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="featured-games"
          initial={{ opacity: 0, y: 50 }}
          animate={featuredGamesControls}
          ref={featuredGamesRef}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2>{t("home.famous")}</h2>
          <div className="local-games-container">
            <div className="container">
              <motion.div
                className="games-section"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                ref={ref}
              >
                <Row gutter={[16, 16]}>
                  {localGames.slice(0, 7).map((game, index) => (
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
                              <span className="game-title">
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
        </motion.div>

        <News />

        <div className="call-to-action">
          <h2 className="cta-title">{t("home.cta_title")}</h2>
          <p className="cta-description">{t("home.cta_description")}</p>
          <div className="cta-button-container">
            <button
              className="button-style"
              onClick={() => navigate("/registration")}
            >
              {t("home.cta_button")}
            </button>
          </div>
        </div>
      </div>
    </Content>
  );
};

export default Home;
