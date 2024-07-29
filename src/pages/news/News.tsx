import { FC } from "react";
import useSWR from "swr";
import { Card, Avatar, Space, Tooltip } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import { InfoCircleOutlined } from "@ant-design/icons";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import "./news.css";
import { BASE_URL } from "../../api/baseUrl";

const { Meta } = Card;

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const News: FC = () => {
  const { t } = useTranslation();
  const newsControls = useAnimation();
  const [newsRef, newsInView] = useInView({ triggerOnce: true });
  const navigate = useNavigate();
  const location = useLocation();

  const { data: newsItems, error } = useSWR(`${BASE_URL}/news`, fetcher);

  if (newsInView) newsControls.start({ opacity: 1, y: 0 });

  const handleIconClick = (link: string) => {
    navigate(link);
  };

  if (error) return <div>{t("error_loading_news")}</div>;
  if (!newsItems) return <div>{t("loading_news")}</div>;

  // Limit news items to 4 if on the home page
  const displayedNews =
    location.pathname === "/" ? newsItems.slice(0, 3) : newsItems;

  return (
    <>
      <h2 className="news-heading">{t("news.news_heading")}</h2>
      <motion.div
        className="news-container"
        initial={{ opacity: 0, y: 50 }}
        animate={newsControls}
        ref={newsRef}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {displayedNews.map((item: any) => (
          <Card
            key={item.id}
            hoverable
            cover={
              <img alt={item.title_tm} src={`${BASE_URL}/${item.image}`} />
            }
            className="news-card"
          >
            <Meta
              avatar={<Avatar src={`${BASE_URL}/${item.image}`} />}
              title={<span className="game-title">{item.title_tm}</span>}
              description={
                <Space
                  direction="horizontal"
                  align="center"
                  className="news-meta-description"
                >
                  <span className="news-date">
                    {new Date(item.created_at).toLocaleDateString()}
                  </span>
                  <Tooltip title={t("read_more")} key={`tooltip-${item.id}`}>
                    <InfoCircleOutlined
                      style={{ color: "#1890ff" }}
                      onClick={() => handleIconClick(`/news/${item.id}`)}
                    />
                  </Tooltip>
                </Space>
              }
            />
          </Card>
        ))}
      </motion.div>
      {location.pathname === "/" && (
        <div className="news-button-container">
          <button className="button-style" onClick={() => navigate("/news")}>
            {t("news.all_news")}
          </button>
        </div>
      )}
    </>
  );
};

export default News;
