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
    college: "",
    branch: "",
    fathersname: "",
    mothersname: "",
    gender: "Male",
    dob: "",
    religion: "",
    motherTounge: "",
    familyIncome: "<15,000",
    nationality: "",
    addressLine1: "",
    addressLine2: "",
    state: "",
    taluka: "",
    pincode: "",
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
      console.log(data);
      alert("Student added sucessfully!!!");
      navigate("/student/login");
    }
  };
  return (
    <div className="signup-form-container-main">
      <div className="signup-form-container">
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
            placeholder="Father's name"
            value={input.fathersname}
            name="fathersname"
            onChange={changeHandler}
          />

          <Input
            type="text"
            placeholder="Mother's name"
            value={input.mothersname}
            name="mothersname"
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
            name="gender"
            value={input.gender}
            options={[{ name: "Male" }, { name: "Female" }]}
          />

          <Input
            type="text"
            placeholder="DOB (DD/MM/YYYY)"
            value={input.dob}
            name="dob"
            onChange={changeHandler}
          />

          <Input
            type="text"
            placeholder="Religion"
            value={input.religion}
            name="religion"
            onChange={changeHandler}
          />

          <Input
            type="text"
            placeholder="Mother Tounge"
            value={input.motherTounge}
            name="motherTounge"
            onChange={changeHandler}
          />

          <Select
            onChange={changeHandler}
            name="familyIncome"
            value={input.familyIncome}
            options={[
              { name: "<15,000" },
              { name: "15,001 - 50,000" },
              { name: "50,001 - 1,50,500" },
              { name: ">1,50,000" },
            ]}
          />

          <Input
            type="text"
            placeholder="Nationality"
            value={input.nationality}
            name="nationality"
            onChange={changeHandler}
          />

          <Input
            type="text"
            placeholder="Address Line 1"
            value={input.addressLine1}
            name="addressLine1"
            onChange={changeHandler}
          />

          <Input
            type="text"
            placeholder="Address Line 2"
            value={input.addressLine2}
            name="addressLine2"
            onChange={changeHandler}
          />

          <Input
            type="text"
            placeholder="State"
            value={input.state}
            name="state"
            onChange={changeHandler}
          />
          <Input
            type="text"
            placeholder="Taluka"
            value={input.taluka}
            name="taluka"
            onChange={changeHandler}
          />
          <Input
            type="text"
            placeholder="Pincode"
            value={input.pincode}
            name="pincode"
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
            placeholder="College Name"
            name="college"
            value={input.college}
            onChange={changeHandler}
          />

          <Input
            placeholder="Branch"
            name="branch"
            value={input.branch}
            onChange={changeHandler}
          />

          <Input
            placeholder="Password"
            name="password"
            value={input.password}
            onChange={changeHandler}
            type="password"
          />
        </form>

        <Button
          label="Signup"
          onClick={clickHandler}
          style={{ margin: "1rem 25%", width: "50%" }}
        />
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
