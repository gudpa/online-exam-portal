import { useState, useEffect } from "react";
import "./styles/AddStudents.css";
import { Button, Input, Select } from "../../components/Forms";

export default function AddStudents() {
  const initialState = {
    class: "",
    roll_no: "",
    fullname: "",
    email: "",
    branch: "",
    college: "",
  };
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState(initialState);
  const [classes, setClasses] = useState([{ name: "Select an option" }]);
  const addStudent = () => {
    setStudents([...students, student]);
  };
  const changeHandler = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };
  const addAllStudents = async () => {
    let res = await fetch(
      "http://localhost:5000/api/student/newMultipleUsers",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ users: students }),
      }
    );
    let data = await res.json();
    if (data.status === "ok") {
      setStudent(initialState);
      setStudents([]);
      alert("Students added sucessfully!!!");
      window.location.reload();
    }
  };
  useEffect(() => {
    fetch("http://localhost:5000/api/class/allClasses")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data.classes);
        setStudent({ ...student, class: data.classes[0].name });
      });
  }, []);
  return (
    <div className="add-students">
      <h2>Add new students</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <table>
          <thead>
            <tr>
              <th>Class</th>
              <th>Roll No.</th>
              <th>Full Name</th>
              <th>Email Id</th>
              <th>College</th>
              <th>Branch</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, i) => {
              return (
                <tr key={i}>
                  <td>{student.class}</td>
                  <td>{student.roll_no}</td>
                  <td>{student.fullname}</td>
                  <td>{student.email}</td>
                  <td>{student.college}</td>
                  <td>{student.branch}</td>
                  <td></td>
                </tr>
              );
            })}
            <tr>
              <td>
                <Select
                  onChange={changeHandler}
                  name="class"
                  id="std"
                  value={student.class}
                  options={classes}
                />
              </td>
              <td>
                <Input
                  placeholder="Roll no"
                  name="roll_no"
                  value={student.roll_no}
                  onChange={changeHandler}
                />
              </td>
              <td>
                <Input
                  placeholder="Full name"
                  name="fullname"
                  value={student.fullname}
                  onChange={changeHandler}
                />
              </td>
              <td>
                <Input
                  placeholder="Email Id"
                  name="email"
                  value={student.email}
                  onChange={changeHandler}
                />
              </td>
              <td>
                <Input
                  placeholder="College Name"
                  name="college"
                  value={student.college}
                  onChange={changeHandler}
                />
              </td>
              <td>
                <Input
                  placeholder="Branch"
                  name="branch"
                  value={student.branch}
                  onChange={changeHandler}
                />
              </td>
              <td>
                <Button label="Add" onClick={addStudent} />
              </td>
            </tr>
          </tbody>
        </table>
        <Button
          label="Save"
          className="save-students-btn"
          onClick={addAllStudents}
        />
      </form>
    </div>
  );
}
