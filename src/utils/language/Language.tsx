import { FC } from "react";
import { useTranslation } from "react-i18next";

const Language: FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="language-container">
      <select
        id="languageSelect"
        className="language-select"
        onChange={(e) => changeLanguage(e.target.value)}
        value={i18n.language}
      >
        <option value="en">EN</option>
        <option value="ru">Ру</option>
        <option value="tm">TM</option>
      </select>
    </div>
  );
};

export default Language;
