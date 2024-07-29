import { FC } from "react";
import { Row, Col, Card } from "antd";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ThunderboltOutlined,
  LockOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import "./local.css";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const LocalServers: FC = () => {
  const { t } = useTranslation();
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
          <h1>{t("local_server.local_servers_heading")}</h1>
          <p>{t("local_server.local_servers_description")}</p>
        </motion.div>

        <motion.div
          className="benefits-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2>{t("local_server.benefits_heading")}</h2>
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
                  title={
                    <span className="custom-card-title">
                      {t("local_server.low_latency")}
                    </span>
                  }
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
                  <p>{t("local_server.low_latency_description")}</p>
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
                    <span className="custom-card-title">
                      {t("local_server.enhanced_security")}
                    </span>
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
                  <p>{t("local_server.enhanced_security_description")}</p>
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
                    <span className="custom-card-title">
                      {t("local_server.customization")}
                    </span>
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
                  <p>{t("local_server.customization_description")}</p>
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
