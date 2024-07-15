import { FC } from "react";
import { Row, Col, Card, Button, Layout } from "antd";
import { Link } from "react-router-dom";
import "./home.css";

const { Content } = Layout;

const Home: FC = () => {
  return (
    <Content className="home-container">
      <div className="container">
        <div className="hero-section">
          <h1>Welcome to GameHub</h1>
          <p>
            Игровая платформа, которая позволит поклонникам киберспорта в
            Туркменистане еще больше насладится игровым процессом.
          </p>
          <Button type="primary" size="large">
            Get Started
          </Button>
        </div>

        <div className="featured-games">
          <h2>Featured Games</h2>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Card
                hoverable
                cover={<img alt="Game 1" src="/images/321467.jpg" />}
              >
                <Card.Meta
                  title="Game Title 1"
                  description="Exciting adventure game"
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Card
                hoverable
                cover={<img alt="Game 2" src="/images/321467.jpg" />}
              >
                <Card.Meta
                  title="Game Title 2"
                  description="Thrilling action game"
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Card
                hoverable
                cover={<img alt="Game 3" src="/images/321467.jpg" />}
              >
                <Card.Meta title="Game Title 3" description="Fun puzzle game" />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Card
                hoverable
                cover={<img alt="Game 4" src="/images/321467.jpg" />}
              >
                <Card.Meta title="Game Title 4" description="Epic RPG game" />
              </Card>
            </Col>
          </Row>
        </div>

        <div className="community-section">
          <h2>Join Our Community</h2>
          <p>Connect with other gamers and share your experiences</p>
          <Link to="/community">
            <Button type="primary">Join Now</Button>
          </Link>
        </div>
      </div>
    </Content>
  );
};

export default Home;
