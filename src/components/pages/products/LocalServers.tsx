import { FC } from "react";
import { Row, Col, Card } from "antd";
import {
  ThunderboltOutlined,
  LockOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import "./local.css";

const LocalServers: FC = () => {
  return (
    <div className="local-servers-container">
      <div className="container">
        <div className="intro-section">
          <h1>Local Servers</h1>
          <p>
            Local servers are physical or virtual servers located within your
            local network or data center. They provide fast, reliable, and
            secure access to your applications, files, and services, ensuring
            minimal latency and optimal performance. Whether for gaming,
            business applications, or personal projects, local servers offer
            unparalleled control and customization.
          </p>
        </div>
        <div className="benefits-section">
          <h2>Benefits of Local Servers</h2>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8}>
              <Card
                title={<span style={{ color: "fff" }}>Low Latency</span>}
                // title="Low Latency"
                cover={
                  <ThunderboltOutlined
                    style={{
                      fontSize: "48px",
                      color: "#1890ff",
                      marginTop: "30px",
                    }}
                  />
                }
              >
                <p>
                  Experience minimal lag and fast response times, ideal for
                  real-time applications.
                </p>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card
                title="Enhanced Security"
                cover={
                  <LockOutlined
                    style={{
                      fontSize: "48px",
                      color: "#1890ff",
                      marginTop: "30px",
                    }}
                  />
                }
              >
                <p>
                  Keep your data secure with localized control and robust
                  security measures.
                </p>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card
                title="Customization"
                cover={
                  <SettingOutlined
                    style={{
                      fontSize: "48px",
                      color: "#1890ff",
                      marginTop: "30px",
                    }}
                  />
                }
              >
                <p>
                  Tailor your server settings to meet your specific needs and
                  requirements.
                </p>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default LocalServers;
