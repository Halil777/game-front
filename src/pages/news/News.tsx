import { FC, useState } from "react";
import useSWR from "swr";
import { Card, Avatar, Space, Tooltip } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import "./news.css";
import { BASE_URL } from "../../api/baseUrl";

const { Meta } = Card;

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const News: FC = () => {
  const { t, i18n } = useTranslation();
  const newsControls = useAnimation();
  const [newsRef, newsInView] = useInView({ triggerOnce: true });
  const [selectedNews, setSelectedNews] = useState<any>(null);

  const { data: newsItems, error } = useSWR(`${BASE_URL}/news`, fetcher);

  if (newsInView) newsControls.start({ opacity: 1, y: 0 });

  const handleCardClick = (item: any) => {
    setSelectedNews(item);
  };

  const handleBackClick = () => {
    setSelectedNews(null);
  };

  if (error) return <div>{t("error_loading_news")}</div>;
  if (!newsItems) return <div>{t("loading_news")}</div>;

  return (
    <>
      {selectedNews ? (
        <div className="news-detail-view">
          <img
            src={`${BASE_URL}/${selectedNews.image}`}
            alt={selectedNews[`title_${i18n.language}`]}
          />
          <div className="news-text-container">
            <h1>{selectedNews[`title_${i18n.language}`]}</h1>
            <h3>{selectedNews[`sub_title_${i18n.language}`]}</h3>
            <p>{selectedNews[`desc_${i18n.language}`]}</p>
          </div>
          <div className="news-footer">
            <span className="news-date">
              {new Date(selectedNews.created_at).toLocaleDateString()}
            </span>
            <button className="button-style" onClick={handleBackClick}>
              {t("games.back")}
            </button>
          </div>
        </div>
      ) : (
        <>
          <h2 className="news-heading">{t("news.news_heading")}</h2>
          <motion.div
            className="news-container"
            initial={{ opacity: 0, y: 50 }}
            animate={newsControls}
            ref={newsRef}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {newsItems.map((item: any) => (
              <Card
                key={item.id}
                hoverable
                cover={
                  <img
                    alt={item[`title_${i18n.language}`]}
                    src={`${BASE_URL}/${item.image}`}
                  />
                }
                className="news-card"
                onClick={() => handleCardClick(item)} // Set selected news item
              >
                <Meta
                  avatar={<Avatar src={`${BASE_URL}/${item.image}`} />}
                  title={
                    <span className="game-title">
                      {item[`title_${i18n.language}`]}
                    </span>
                  }
                  description={
                    <Space
                      direction="horizontal"
                      align="center"
                      className="news-meta-description"
                    >
                      <span className="news-date">
                        {new Date(item.created_at).toLocaleDateString()}
                      </span>
                      <Tooltip
                        title={t("read_more")}
                        key={`tooltip-${item.id}`}
                      >
                        <InfoCircleOutlined
                          style={{ color: "#1890ff" }}
                          onClick={() => handleCardClick(item)} // Set selected news item
                        />
                      </Tooltip>
                    </Space>
                  }
                />
              </Card>
            ))}
          </motion.div>
        </>
      )}
    </>
  );
};

export default News;
