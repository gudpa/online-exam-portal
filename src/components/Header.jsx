import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "./Forms";
import "./styles/Header.css";

export default function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const logoutUser = () => {
    window.localStorage.userId = "";
    navigate("/student/login");
  };
  const logoutAdmin = () => {
    window.localStorage.adminLogin = "";
    navigate("/admin/login");
  };
  if (pathname.split("/")[1] === "admin") {
    return (
      <div className="header-container">
        <div className="logo">
          <img
            src="https://cdn.logo.com/hotlink-ok/logo-social.png"
            alt="logo"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="btn-container">
          {window.localStorage.adminLogin && (
            <>
              <Button
                label="Add Exam"
                onClick={() => navigate("admin/addexam")}
              />
              <Button
                label="Manage Questions"
                onClick={() => navigate("admin/managequestions")}
              />
              <Button
                label="Manage Students"
                onClick={() => navigate("admin/managestudents")}
              />
              <Button label="Logout" onClick={logoutAdmin} />
            </>
          )}
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
            onClick={() => navigate("/")}
          />
        </div>
        <div className="btn-container">
          {window.localStorage.userId && (
            <>
              <Button label="Exams" onClick={() => navigate("student/exams")} />
              <Button label="Logout" onClick={logoutUser} />
            </>
          )}
        </div>
      </div>
    );
  }
}
