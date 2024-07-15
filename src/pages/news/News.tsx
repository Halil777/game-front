import { FC } from "react";
import { Card, Avatar, Space, Tooltip } from "antd";
import { Link } from "react-router-dom";
import { InfoCircleOutlined } from "@ant-design/icons";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./news.css";

const { Meta } = Card;

const newsItems = [
  {
    id: 1,
    title: "Exciting News About Game 1",
    imageUrl: "/images/321467.jpg",
    date: "2024-07-15",
    link: "/news/game1",
  },
  {
    id: 2,
    title: "New Features Added to Game 2",
    imageUrl: "/images/321467.jpg",
    date: "2024-07-14",
    link: "/news/game2",
  },
  {
    id: 3,
    title: "Upcoming Events for Game 3",
    imageUrl: "/images/321467.jpg",
    date: "2024-07-13",
    link: "/news/game3",
  },
  {
    id: 4,
    title: "Major Update Released for Game 4",
    imageUrl: "/images/321467.jpg",
    date: "2024-07-12",
    link: "/news/game4",
  },
];

const News: FC = () => {
  const newsControls = useAnimation();
  const [newsRef, newsInView] = useInView({ triggerOnce: true });

  if (newsInView) newsControls.start({ opacity: 1, y: 0 });

  return (
    <motion.div
      className="news-container"
      initial={{ opacity: 0, y: 50 }}
      animate={newsControls}
      ref={newsRef}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      {newsItems.map((item) => (
        <Card
          key={item.id}
          hoverable
          cover={<img alt={item.title} src={item.imageUrl} />}
          className="news-card"
        >
          <Meta
            avatar={<Avatar src="/images/321467.jpg" />}
            title={<span className="game-title">{item.title}</span>}
            description={
              <Space direction="horizontal" align="center">
                <span style={{ color: "#ffffff", marginRight: "8px" }}>
                  {item.date}
                </span>
                <Tooltip title="Read More" key={`tooltip-${item.id}`}>
                  <Link to={item.link}>
                    <InfoCircleOutlined style={{ color: "#1890ff" }} />
                  </Link>
                </Tooltip>
              </Space>
            }
          />
        </Card>
      ))}
    </motion.div>
  );
};

export default News;
