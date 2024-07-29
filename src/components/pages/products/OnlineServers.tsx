import { FC } from "react";
import { Row, Col, Card } from "antd";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CloudOutlined, GlobalOutlined, SyncOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import "./online.css";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const OnlineServers: FC = () => {
  const { t } = useTranslation();
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
          <h1>{t("online_server.title")}</h1>
          <p>{t("online_server.description")}</p>
        </motion.div>

        <motion.div
          className="benefits-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2>{t("online_server.benefits")}</h2>
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
                  title={t("online_server.global_access")}
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
                  <p>{t("online_server.global_access_description")}</p>
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
                  title={t("online_server.scalability")}
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
                  <p>{t("online_server.scalability_description")}</p>
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
                  title={t("online_server.reliability")}
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
                  <p>{t("online_server.reliability_description")}</p>
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
