import { useNavigate } from "react-router-dom";
import { Button } from "./Forms";
import "./styles/Header.css";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className="header-container">
      <div className="logo">
        <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="logo" />
      </div>
      <div className="btn-container">
        <Button
          className="login-btn"
          label="Login"
          onClick={() => navigate("login")}
        />
      </div>
    </div>
  );
}
