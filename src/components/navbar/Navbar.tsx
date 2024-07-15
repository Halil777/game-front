import { FC, useState, useEffect } from "react";
import { Menu, Dropdown } from "antd";
import { Link } from "react-router-dom";
import "./navbar.css";
import Language from "../../utils/language/Language";

const Navbar: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
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
            {/* <Link to="/">
              <img src={logo} alt="Logo" />
            </Link> */}
            <h3>Logo</h3>
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
