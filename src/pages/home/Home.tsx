import { FC } from "react";
import { Row, Col, Card, Button, Layout } from "antd";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./home.css";

const { Content } = Layout;

const Home: FC = () => {
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
          <h1>Welcome to GameHub</h1>
          <p>
            Игровая платформа, которая позволит поклонникам киберспорта в
            Туркменистане еще больше насладится игровым процессом.
          </p>
          <Button type="primary" size="large">
            Get Started
          </Button>
        </motion.div>

        <motion.div
          className="featured-games"
          initial={{ opacity: 0, y: 50 }}
          animate={featuredGamesControls}
          ref={featuredGamesRef}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2>Featured Games</h2>
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

        <motion.div
          className="community-section"
          initial={{ opacity: 0, y: 50 }}
          animate={communityControls}
          ref={communityRef}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2>Join Our Community</h2>
          <p>Connect with other gamers and share your experiences</p>
          <Link to="/community">
            <Button type="primary">Join Now</Button>
          </Link>
        </motion.div>
      </div>
    </Content>
  );
};

export default Home;
