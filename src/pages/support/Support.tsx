import { FC } from "react";
import { Card } from "antd";
import {
  PhoneOutlined,
  ClockCircleOutlined,
  MailOutlined,
} from "@ant-design/icons";
import "./support.css";

const Support: FC = () => {
  return (
    <div className="support-container">
      <div className="support-content">
        <p className="support-description">
          Need assistance? Contact us through various channels.
        </p>
        <div className="support-cards">
          <Card className="support-card">
            <PhoneOutlined className="support-icon" />
            <div>
              <h3>Phone Number</h3>
              <p>+123 456 7890</p>
            </div>
          </Card>

          <Card className="support-card">
            <ClockCircleOutlined className="support-icon" />
            <div>
              <h3>Support Hours</h3>
              <p>Mon - Fri: 9:00 AM - 5:00 PM</p>
            </div>
          </Card>

          <Card className="support-card">
            <MailOutlined className="support-icon" />
            <div>
              <h3>Email</h3>
              <p>support@gamehub.com</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Support;
