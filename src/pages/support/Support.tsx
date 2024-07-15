import { FC } from "react";
import { Card } from "antd";
import {
  PhoneOutlined,
  ClockCircleOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./support.css";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Support: FC = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });

  return (
    <div className="support-container">
      <div className="support-content">
        <p className="support-description">
          Need assistance? Contact us through various channels.
        </p>
        <div className="support-cards">
          <motion.div
            ref={ref1}
            initial="hidden"
            animate={inView1 ? "visible" : "hidden"}
            variants={cardVariants}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="support-card">
              <PhoneOutlined className="support-icon" />
              <div>
                <h3>Phone Number</h3>
                <p>+123 456 7890</p>
              </div>
            </Card>
          </motion.div>

          <motion.div
            ref={ref2}
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
            variants={cardVariants}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="support-card">
              <ClockCircleOutlined className="support-icon" />
              <div>
                <h3>Support Hours</h3>
                <p>Mon - Fri: 9:00 AM - 5:00 PM</p>
              </div>
            </Card>
          </motion.div>

          <motion.div
            ref={ref3}
            initial="hidden"
            animate={inView3 ? "visible" : "hidden"}
            variants={cardVariants}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Card className="support-card">
              <MailOutlined className="support-icon" />
              <div>
                <h3>Email</h3>
                <p>support@gamehub.com</p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Support;
