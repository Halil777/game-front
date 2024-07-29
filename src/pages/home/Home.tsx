import { FC } from "react";
import { Row, Col, Card, Layout } from "antd";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MacCommandOutlined, WindowsOutlined } from "@ant-design/icons"; // Ant Design icons
import "./home.css";
import News from "../news/News";
import { useTranslation } from "react-i18next";

const { Content } = Layout;

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
              <MacCommandOutlined className="platform-icon" />
              <WindowsOutlined className="platform-icon" />
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
          <Row gutter={[16, 16]}>
            {[1, 2, 3, 4].map((i) => (
              <Col key={i} xs={24} sm={12} md={8} lg={6}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card
                    hoverable
                    cover={<img alt={`Game ${i}`} src="/images/321467.jpg" />}
                  >
                    <Card.Meta
                      title={`Game Title ${i}`}
                      description={`Exciting adventure game ${i}`}
                    />
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
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
