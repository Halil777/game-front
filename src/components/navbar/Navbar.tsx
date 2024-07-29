import { FC, useState, useEffect } from "react";
import { Menu, Dropdown } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import Language from "../../utils/language/Language";
import { useTranslation } from "react-i18next";

const Navbar: FC = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State for tracking user login
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Check if user is logged in by checking local storage or any other method
    const token = localStorage.getItem("client_token");
    setIsLoggedIn(!!token); // Set isLoggedIn based on token presence
  }, []);

  const productMenu = (
    <Menu className="custom-dropdown-menu">
      <Menu.Item key="1" className="custom-dropdown-menu-item">
        <Link to="/local-servers">{t("navbar.local_servers")}</Link>
      </Menu.Item>
      <Menu.Item key="2" className="custom-dropdown-menu-item">
        <Link to="/online-servers">{t("navbar.online_servers")}</Link>
      </Menu.Item>
      <Menu.Item key="3" className="custom-dropdown-menu-item">
        <Link to="/team-speak">TeamSpeak</Link>
      </Menu.Item>
    </Menu>
  );

  const gamesMenu = (
    <Menu className="custom-dropdown-menu">
      <Menu.Item key="1" className="custom-dropdown-menu-item">
        <Link to="/local-games">{t("navbar.local_games")}</Link>
      </Menu.Item>
      <Menu.Item key="2" className="custom-dropdown-menu-item">
        <Link to="/online-games">{t("navbar.online_games")}</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
      <div className="container">
        <div className="navbar-content">
          <div className="logo">
            <img
              src="/images/logo.svg"
              alt="Logo"
              onClick={() => navigate("/")}
            />
          </div>
          <Menu mode="horizontal" className="menu">
            <Menu.Item key="products">
              <Dropdown overlay={productMenu}>
                <a
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  {t("navbar.products")}
                </a>
              </Dropdown>
            </Menu.Item>
            <Menu.Item key="about">
              <Link to="/about">{t("navbar.about")}</Link>
            </Menu.Item>
            <Menu.Item key="news">
              <Link to="/news">{t("navbar.news")}</Link>
            </Menu.Item>
            <Menu.Item key="support">
              <Link to="/support">{t("navbar.support")}</Link>
            </Menu.Item>
            <Menu.Item key="games">
              <Dropdown overlay={gamesMenu}>
                <a
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  {t("navbar.games")}
                </a>
              </Dropdown>
            </Menu.Item>
            <Menu.Item key="language" className="language-menu-item">
              <Language />
            </Menu.Item>
            {isLoggedIn ? (
              <>
                <Menu.Item key="registration">
                  <button
                    className="button-style"
                    onClick={() => navigate("/login")}
                  >
                    {t("navbar.registration")}
                  </button>
                </Menu.Item>
                <Menu.Item>
                  <button
                    className="button-style"
                    onClick={() => navigate("/profile")}
                  >
                    Profile
                  </button>
                </Menu.Item>
              </>
            ) : (
              <Menu.Item key="registration">
                <button
                  className="button-style"
                  onClick={() => navigate("/login")}
                >
                  {t("navbar.registration")}
                </button>
              </Menu.Item>
            )}
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
