import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "./Forms";
import "./styles/Header.css";

export default function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  if (pathname.split("/")[1] === "admin") {
    return (
      <div className="header-container">
        <div className="logo">
          <img
            src="https://cdn.logo.com/hotlink-ok/logo-social.png"
            alt="logo"
          />
        </div>
        <div className="btn-container">
          <Button
            className="login-btn"
            label="Admin Login"
            onClick={() => navigate("admin/login")}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="header-container">
        <div className="logo">
          <img
            src="https://cdn.logo.com/hotlink-ok/logo-social.png"
            alt="logo"
          />
        </div>
        <div className="btn-container">
          <Button
            className="login-btn"
            label="Login"
            onClick={() => navigate("student/login")}
          />
        </div>
      </div>
    );
  }
}
