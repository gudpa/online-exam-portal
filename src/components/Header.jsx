import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "./Forms";
import LOGO from "../images/logo.jpg";
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
      <>
        <div className="logo">
          <img src={LOGO} alt="logo" />
        </div>
        <div className="header-container">
          <div></div>
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
      </>
    );
  } else if (pathname.split("/")[1] === "student") {
    return (
      <>
        <div className="logo">
          <img src={LOGO} alt="logo" />
        </div>

        <div className="header-container">
          <div></div>
          <div className="btn-container">
            {window.localStorage.userId && (
              <>
                <Button
                  label="Exams"
                  onClick={() => navigate("student/exams")}
                />
                <Button label="Form" onClick={() => navigate("student/form")} />
                <Button label="Logout" onClick={logoutUser} />
              </>
            )}
          </div>
        </div>
      </>
    );
  }
}
