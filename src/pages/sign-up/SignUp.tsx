import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import axios from "axios";
import "./sign-up.css";

const SignUp: FC = () => {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    fullname: "",
    phone: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTogglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleToggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handleSignUp = async (event: React.FormEvent) => {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const payload = {
      username: formData.username,
      password: formData.password,
      fullname: formData.fullname,
      phone: formData.phone,
      email: formData.email,
      stream_id: "12345678",
    };

    try {
      const response = await axios.post(
        "http://88.218.60.127:5678/client/sign-up",
        payload
      );
      alert("Sign-up successful!");
      console.log(response);
      navigate("/login");
    } catch (error) {
      console.error("Sign-up error:", error);
      alert("An error occurred during sign-up. Please try again.");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <div className="logo">
          <img src="/images/logo.svg" alt="Logo" />
        </div>
        <h2>Регистрация в Elektron Sport Gaming</h2>
        <form onSubmit={handleSignUp}>
          <div className="input-group">
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              required
            />
          </div>
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
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <div className="password-input">
              <input
                type={confirmPasswordVisible ? "text" : "password"}
                id="confirm-password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <span
                className="toggle-password"
                onClick={handleToggleConfirmPasswordVisibility}
              >
                {confirmPasswordVisible ? (
                  <EyeInvisibleOutlined style={{ marginTop: "12px" }} />
                ) : (
                  <EyeTwoTone style={{ marginTop: "12px" }} />
                )}
              </span>
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="signup-button">
            Register
          </button>
        </form>
        <p className="login-text">
          Уже есть учётная запись?
          <span className="login-link" onClick={() => navigate("/login")}>
            Войти
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
