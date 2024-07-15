import { FC } from "react";
import { Card, Avatar, Tooltip } from "antd";
import { Link } from "react-router-dom";
import { InfoCircleOutlined } from "@ant-design/icons";
import "./news.css";

const { Meta } = Card;

// Example data (replace with your actual data)
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
  return (
    <>
      <h1 style={{ color: "#fff", textAlign: "center", marginTop: "100px" }}>
        News
      </h1>
      <div className="news-container">
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
                <div className="news-meta-description">
                  <span className="news-date">{item.date}</span>
                  <Tooltip title="Read More" key={`tooltip-${item.id}`}>
                    <Link to={item.link}>
                      <InfoCircleOutlined style={{ color: "#1890ff" }} />
                    </Link>
                  </Tooltip>
                </div>
              }
            />
          </Card>
        ))}
      </div>
    </>
  );
};

export default News;
