import { FC } from "react";
import { Row, Col, Card } from "antd";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ThunderboltOutlined,
  LockOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import "./local.css";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const LocalServers: FC = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });

  return (
    <motion.div
      className="local-servers-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <motion.div
          className="intro-section"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1>Local Servers</h1>
          <p>
            Local servers are physical or virtual servers located within your
            local network or data center. They provide fast, reliable, and
            secure access to your applications, files, and services, ensuring
            minimal latency and optimal performance. Whether for gaming,
            business applications, or personal projects, local servers offer
            unparalleled control and customization.
          </p>
        </motion.div>

        <motion.div
          className="benefits-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2>Benefits of Local Servers</h2>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8}>
              <motion.div
                ref={ref1}
                initial="hidden"
                animate={inView1 ? "visible" : "hidden"}
                variants={cardVariants}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card
                  title={<span className="custom-card-title">Low Latency</span>}
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
              </motion.div>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <motion.div
                ref={ref2}
                initial="hidden"
                animate={inView2 ? "visible" : "hidden"}
                variants={cardVariants}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Card
                  title={
                    <span className="custom-card-title">Enhanced Security</span>
                  }
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
              </motion.div>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <motion.div
                ref={ref3}
                initial="hidden"
                animate={inView3 ? "visible" : "hidden"}
                variants={cardVariants}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Card
                  title={
                    <span className="custom-card-title">Customization</span>
                  }
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
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LocalServers;
