import { useEffect, useState } from "react";
import { Button, Input, Select } from "../../components/Forms";
import "./styles/StudentLogin.css";
import { useNavigate } from "react-router-dom";
import { classes } from "../../constants";

export default function StudentSignup() {
  const navigate = useNavigate();
  useEffect(() => {
    if (window.localStorage.userId) {
      navigate("/student/exams");
    }
  }, [navigate]);
  const [input, setInput] = useState({
    email: "",
    password: "",
    fullname: "",
    class: "First Year",
    roll_no: "",
  });
  function changeHandler(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }
  const clickHandler = async () => {
    let res = await fetch(
      "http://localhost:5000/api/student/newMultipleUsers",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ users: [input] }),
      }
    );
    let data = await res.json();
    if (data.status === "ok") {
      alert("Student added sucessfully!!!");
      navigate("/student/login")
    }
  };
  return (
    <div className="container">
      <div className="login-form-container signup-form-container">
        <h2>Signup Form</h2>
        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          <Input
            type="text"
            placeholder="Full name"
            value={input.fullname}
            name="fullname"
            onChange={changeHandler}
          />
          <Input
            type="text"
            placeholder="Email"
            value={input.email}
            name="email"
            onChange={changeHandler}
          />
          <Select
            onChange={changeHandler}
            name="class"
            id="std"
            value={input.class}
            options={classes}
          />
          <Input
            placeholder="Roll no"
            name="roll_no"
            value={input.roll_no}
            onChange={changeHandler}
          />
          <Input
            type="password"
            placeholder="Password"
            value={input.password}
            name="password"
            onChange={changeHandler}
          />

          <Button label="Signup" onClick={clickHandler} />
        </form>
        <div
          className="login-form-link"
          onClick={() => navigate("/student/login")}
        >
          Already registered? Login here!
        </div>
      </div>
    </div>
  );
}
