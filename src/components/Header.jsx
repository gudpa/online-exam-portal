import { Button } from "./Forms";
import "./Header.css";

export default function Header() {
  return (
    <div className="header-container">
      <div className="logo">
        <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="logo" />
      </div>
      <div className="btn-container">
        <Button className="login-btn" label="Login" />
      </div>
    </div>
  );
}
