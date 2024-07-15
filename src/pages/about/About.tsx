import { FC } from "react";
import { Card } from "antd";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup"; // Import CountUp component
import "./about.css";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const About: FC = () => {
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
          <h2>Welcome to GameHub</h2>
          <p>
            GameHub is your ultimate destination for everything related to
            online gaming. Whether you're a player looking for the best
            multiplayer games, a developer seeking powerful server solutions, or
            a community member wanting to connect with like-minded gamers,
            GameHub has you covered.
          </p>
        </motion.div>

        <motion.h2
          style={{ textAlign: "center", marginTop: "60px" }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Statistics
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
              <h3>Registered Users</h3>
              <CountUp start={0} end={500000} duration={5} separator="," /> +
              {/* Example: Start from 0, end at 500,000 over 2 seconds */}
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
              <h3>Active Players Daily</h3>
              <CountUp start={0} end={50000} duration={5} separator="," /> +
              {/* Example: Start from 0, end at 50,000 over 2 seconds */}
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
              <h3>Best Online Games</h3>
              <CountUp start={0} end={100} duration={5} /> +
              {/* Example: Start from 0, end at 100 over 2 seconds */}
            </Card>
          </motion.div>
        </motion.div>

        <motion.h2
          style={{ textAlign: "center", marginTop: "60px" }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Our Partners
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
