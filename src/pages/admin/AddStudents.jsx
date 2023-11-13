import { useState } from "react";
import "./styles/AddStudents.css";
import { Button, Input } from "../../components/Forms";

export default function AddStudents() {
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState([]);
  const addStudent = () => {
    setStudents([...students, student]);
    console.log(students);
  };
  const changeHandler = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };
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
              <th></th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => {
              return (
                <tr>
                  <td>{student.class}</td>
                  <td>{student.roll}</td>
                  <td>{student.fullname}</td>
                  <td></td>
                </tr>
              );
            })}
            <tr>
              <td>
                <Input
                  placeholder="Class"
                  name="class"
                  value={student.class}
                  onChange={changeHandler}
                />
              </td>
              <td>
                <Input
                  placeholder="Roll no"
                  name="roll"
                  value={student.roll}
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
                <Button label="Add" onClick={addStudent} />
              </td>
            </tr>
          </tbody>
        </table>
        <Button label="Save" className="save-students-btn" />
      </form>
    </div>
  );
}
