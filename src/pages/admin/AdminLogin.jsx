import { useState } from "react";
import { Button, Input } from "../../components/Forms";
import "./styles/AdminLogin.css";

export default function AdminLogin() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  function changeHandler(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }
  return (
    <div className="container">
      <div className="login-form-container">
        <h2>Login Form</h2>
        <form className="login-form">
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
          <Button type="submit" label="Login" />
        </form>
      </div>
    </div>
  );
}
