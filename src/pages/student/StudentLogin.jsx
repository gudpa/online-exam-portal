import { useEffect, useState } from "react";
import { Button, Input } from "../../components/Forms";
import "./styles/StudentLogin.css";
import { useNavigate } from "react-router-dom";

export default function StudentLogin() {
  const navigate = useNavigate();
  useEffect(() => {
    if (window.localStorage.userId) {
      navigate("/student/exams");
    }
  }, [navigate]);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  function changeHandler(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }
  async function submitLoginForm() {
    let res = await fetch("http://localhost:5000/api/student/validateUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: input.email,
        password: input.password,
      }),
    });
    let data = await res.json();
    if (data.user.length === 1) {
      window.localStorage.userId = data.user[0]._id;
      window.localStorage.socres = JSON.stringify(data.user[0].solutions);
      // console.log(data.user[0]);
      navigate("/student/exams");
    } else {
      alert("Incorrect Email or Password!!!");
    }
  }
  return (
    <div className="container">
      <div className="login-form-container">
        <h2>Login Form</h2>
        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          <Input
            type="text"
            placeholder="Email"
            value={input.email}
            name="email"
            onChange={changeHandler}
          />
          <Input
            type="password"
            placeholder="Password"
            value={input.password}
            name="password"
            onChange={changeHandler}
          />
          <Button label="Login" onClick={submitLoginForm} />
        </form>
      </div>
    </div>
  );
}
