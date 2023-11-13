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
          <Button label="Add Exam" onClick={() => navigate("admin/addexam")} />
          <Button
            label="Manage Questions"
            onClick={() => navigate("admin/managequestions")}
          />
          <Button
            label="Add Students"
            onClick={() => navigate("admin/addstudents")}
          />
          <Button
            label="Modify Students"
            onClick={() => navigate("admin/modifystudents")}
          />
          <Button label="Login" onClick={() => navigate("admin/login")} />
        </div>
      </div>
    );
  } else if (pathname.split("/")[1] === "student") {
    return (
      <div className="header-container">
        <div className="logo">
          <img
            src="https://cdn.logo.com/hotlink-ok/logo-social.png"
            alt="logo"
          />
        </div>
        <div className="btn-container">
          <Button label="Exams" onClick={() => navigate("student/exams")} />
          <Button label="Login" onClick={() => navigate("student/login")} />
        </div>
      </div>
    );
  }
}
