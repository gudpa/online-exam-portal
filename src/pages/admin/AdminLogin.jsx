import { useEffect, useState } from "react";
import { Button, Input } from "../../components/Forms";
import "./styles/AdminLogin.css";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  function changeHandler(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }
  useEffect(() => {
    if (window.localStorage.adminLogin) {
      navigate("/admin/addExam");
    }
  }, [navigate]);
  async function adminLogin() {
    if (input.username === "admin" && input.password === "admin") {
      window.localStorage.adminLogin = "true";
      navigate("/admin/addexam");
    } else {
      alert("Incorrect Username or Password!!!");
    }
  }
  return (
    <div className="container">
      <div className="login-form-container">
        <h2>Login Form</h2>
        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          <Input
            type="text"
            placeholder="Username"
            value={input.username}
            name="username"
            onChange={changeHandler}
          />
          <Input
            type="password"
            placeholder="Password"
            value={input.password}
            name="password"
            onChange={changeHandler}
          />
          <Button label="Login" onClick={adminLogin} />
        </form>
      </div>
    </div>
  );
}
