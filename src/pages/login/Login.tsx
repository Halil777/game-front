import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import axios from "axios";
import "./login.css";

const Login: FC = () => {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleTogglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://88.218.60.127:5678/client/sign-in",
        formData
      );
      // Assuming the response contains the necessary info to verify login
      if (response.data) {
        // Navigate to the home page or another route on successful login
        navigate("/");
      } else {
        alert("Login failed. Please check your username and password.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred during login. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <div className="logo">
          <img src="/images/logo.svg" alt="Logo" />
        </div>
        <h2>Войти в Elektron Sport Gaming</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div className="password-input">
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <span
                className="toggle-password"
                onClick={handleTogglePasswordVisibility}
              >
                {passwordVisible ? (
                  <EyeInvisibleOutlined style={{ marginTop: "12px" }} />
                ) : (
                  <EyeTwoTone style={{ marginTop: "12px" }} />
                )}
              </span>
            </div>
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <p className="signup-text">
          Нет аккаунта?
          <span className="signup-link" onClick={() => navigate("/signup")}>
            Регистрация
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
