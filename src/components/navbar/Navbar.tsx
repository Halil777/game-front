import { FC, useState, useEffect } from "react";
import { Menu, Dropdown, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import Language from "../../utils/language/Language";

const Navbar: FC = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const productMenu = (
    <Menu className="custom-dropdown-menu">
      <Menu.Item key="1" className="custom-dropdown-menu-item">
        <Link to="/local-servers">Local Servers</Link>
      </Menu.Item>
      <Menu.Item key="2" className="custom-dropdown-menu-item">
        <Link to="/online-servers">Online Servers</Link>
      </Menu.Item>
      <Menu.Item key="3" className="custom-dropdown-menu-item">
        <Link to="/team-speak">TeamSpeak</Link>
      </Menu.Item>
    </Menu>
  );

  const gamesMenu = (
    <Menu className="custom-dropdown-menu">
      <Menu.Item key="1" className="custom-dropdown-menu-item">
        <Link to="/local-games">Local Games</Link>
      </Menu.Item>
      <Menu.Item key="2" className="custom-dropdown-menu-item">
        <Link to="/online-games">Online Games</Link>
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
                  Products
                </a>
              </Dropdown>
            </Menu.Item>
            <Menu.Item key="about">
              <Link to="/about">About</Link>
            </Menu.Item>
            <Menu.Item key="news">
              <Link to="/news">News</Link>
            </Menu.Item>
            <Menu.Item key="support">
              <Link to="/support">Support</Link>
            </Menu.Item>
            <Menu.Item key="games">
              <Dropdown overlay={gamesMenu}>
                <a
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  Games
                </a>
              </Dropdown>
            </Menu.Item>
            <Menu.Item key="language" className="language-menu-item">
              <Language />
            </Menu.Item>
          </Menu>
          <Button
            type="primary"
            style={{
              backgroundColor: "#79109D",
              borderColor: "#79109D",
              padding: "20px",
            }}
            onClick={() => navigate("/login")}
          >
            Registration
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
