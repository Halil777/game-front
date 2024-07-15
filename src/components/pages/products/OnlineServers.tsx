import { FC } from "react";
import { Row, Col, Card } from "antd";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CloudOutlined, GlobalOutlined, SyncOutlined } from "@ant-design/icons";
import "./online.css";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const OnlineServers: FC = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });

  return (
    <motion.div
      className="online-servers-container"
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
          <h1>Online Servers</h1>
          <p>
            Online servers are hosted on the internet, providing global
            accessibility and scalability. They are ideal for applications
            requiring broad reach, such as websites, online games, and
            cloud-based services. Online servers offer robust performance, high
            availability, and the ability to scale resources as needed.
          </p>
        </motion.div>

        <motion.div
          className="benefits-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2>Benefits of Online Servers</h2>
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
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default OnlineServers;
