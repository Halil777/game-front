import { FC } from "react";
import { Typography, Image } from "antd";
import "./newDetail.css";

const { Title, Paragraph, Text } = Typography;

const NewsDetail: FC = () => {
  // Example data for demonstration
  const newsDetail = {
    title: "Exciting News About Game 1",
    imageUrl: "/images/321467.jpg",
    content: "Detailed content about the exciting news.",
    date: "2024-07-15",
    time: "10:30:00",
  };

  return (
    <div className="news-detail-container">
      {/* News Image */}
      <div className="news-image-container">
        <Image src={newsDetail.imageUrl} alt={newsDetail.title} width="100%" />
      </div>

      {/* News Title */}
      <Title level={2} className="news-title">
        {newsDetail.title}
      </Title>

      {/* News Content */}
      <Paragraph className="news-content">{newsDetail.content}</Paragraph>

      {/* Date and Time */}
      <div className="news-metadata">
        <Text className="news-date">{newsDetail.date}</Text>
        <Text className="news-time">{newsDetail.time}</Text>
      </div>
    </div>
  );
};

export default NewsDetail;
