import React from "react";
import { useTranslation } from "react-i18next";
import { Card } from "antd";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup"; // Import CountUp component
import "./about.css";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const About: React.FC = () => {
  const { t } = useTranslation();
  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });

  return (
    <motion.div
      className="about-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <motion.div
          className="about-description"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2>{t("home.title")}</h2>
          <p>{t("home.subtitle")}</p>
        </motion.div>

        <motion.h2
          style={{ textAlign: "center", marginTop: "60px" }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {t("about.statistics_heading")}
        </motion.h2>

        <motion.div
          className="about-stats"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.div
            ref={ref1}
            initial="hidden"
            animate={inView1 ? "visible" : "hidden"}
            variants={cardVariants}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="stat-card">
              <h3>{t("about.registered_users")}</h3>
              <CountUp start={0} end={500000} duration={5} separator="," /> +
            </Card>
          </motion.div>
          <motion.div
            ref={ref2}
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
            variants={cardVariants}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="stat-card">
              <h3>{t("about.active_players")}</h3>
              <CountUp start={0} end={50000} duration={5} separator="," /> +
            </Card>
          </motion.div>
          <motion.div
            ref={ref3}
            initial="hidden"
            animate={inView3 ? "visible" : "hidden"}
            variants={cardVariants}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Card className="stat-card">
              <h3>{t("about.best_games")}</h3>
              <CountUp start={0} end={100} duration={5} /> +
            </Card>
          </motion.div>
        </motion.div>

        <motion.h2
          style={{ textAlign: "center", marginTop: "60px" }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {t("about.our_partners")}
        </motion.h2>

        <motion.div
          className="partner-images"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <motion.img
            src="/images/321467.jpg"
            alt="Partner 1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          />
          <motion.img
            src="/images/321467.jpg"
            alt="Partner 2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          />
          <motion.img
            src="/images/321467.jpg"
            alt="Partner 3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.6 }}
          />
          <motion.img
            src="/images/321467.jpg"
            alt="Partner 4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.8 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
