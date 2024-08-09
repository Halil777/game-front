import { FC } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { useTranslation } from "react-i18next";
import { BASE_URL } from "../../api/baseUrl";
import "./newDetail.css";

const fetcher = (url: string) =>
  fetch(url).then((res) => {
    if (!res.ok) {
      throw new Error(`Network response was not ok: ${res.statusText}`);
    }
    return res.json();
  });

const NewsDetails: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t, i18n } = useTranslation();
  const { data: newsItem, error } = useSWR(`${BASE_URL}/news/${id}`, fetcher);

  if (error)
    return (
      <div>
        {t("error_loading_news_detail")} - {error.message}
      </div>
    );
  if (!newsItem) return <div>{t("loading_news_detail")}</div>;

  return (
    <div className="news-details">
      <h1>{newsItem[`title_${i18n.language}`]}</h1>
      <img
        src={`${BASE_URL}/${newsItem.image}`}
        alt={newsItem[`title_${i18n.language}`]}
      />
      <h3>{newsItem[`sub_title_${i18n.language}`]}</h3>
      <p>{newsItem[`desc_${i18n.language}`]}</p>
      <span>{new Date(newsItem.created_at).toLocaleDateString()}</span>
    </div>
  );
};

export default NewsDetails;
