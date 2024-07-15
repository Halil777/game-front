import { FC } from "react";
import { Row, Col, Card } from "antd";
import { CloudOutlined, GlobalOutlined, SyncOutlined } from "@ant-design/icons";
import "./online.css";

const OnlineServers: FC = () => {
  return (
    <div className="online-servers-container">
      <div className="container">
        <div className="intro-section">
          <h1>Online Servers</h1>
          <p>
            Online servers are hosted on the internet, providing global
            accessibility and scalability. They are ideal for applications
            requiring broad reach, such as websites, online games, and
            cloud-based services. Online servers offer robust performance, high
            availability, and the ability to scale resources as needed.
          </p>
        </div>
        <div className="benefits-section">
          <h2>Benefits of Online Servers</h2>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8}>
              <Card
                title="Global Access"
                cover={
                  <GlobalOutlined
                    style={{
                      fontSize: "48px",
                      color: "#1890ff",
                      marginTop: "30px",
                    }}
                  />
                }
              >
                <p>
                  Access your services from anywhere in the world with an
                  internet connection.
                </p>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card
                title="Scalability"
                cover={
                  <SyncOutlined
                    style={{
                      fontSize: "48px",
                      color: "#1890ff",
                      marginTop: "30px",
                    }}
                  />
                }
              >
                <p>
                  Effortlessly scale your resources to meet changing demands.
                </p>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card
                title="Reliability"
                cover={
                  <CloudOutlined
                    style={{
                      fontSize: "48px",
                      color: "#1890ff",
                      marginTop: "30px",
                    }}
                  />
                }
              >
                <p>
                  Ensure high availability and performance with cloud-based
                  infrastructure.
                </p>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default OnlineServers;
