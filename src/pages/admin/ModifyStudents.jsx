import "./styles/ModifyStudents.css";
import { Button } from "../../components/Forms";
import { useEffect, useState } from "react";
import StudentPopup from "./StudentPopup";

export default function ModifyStudents() {
  const [students, setStudents] = useState([]);
  const [refresh, setRefresh] = useState(true);
  const [popup, setPopup] = useState(false);
  const [data, setData] = useState({});

  const activateStudent = (id) => {
    fetch("http://localhost:5000/api/student/activateUser/" + id, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "ok") {
          alert("Student activated successfully!!!");
          setRefresh(!refresh);
        }
      });
  };

  const deactivateStudent = (id) => {
    fetch("http://localhost:5000/api/student/deactivateUser/" + id, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "ok") {
          alert("Student deactivated successfully!!!");
          setRefresh(!refresh);
        }
      });
  };

  const deleteStudent = (id) => {
    fetch("http://localhost:5000/api/student/deleteUser/" + id, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "ok") {
          alert("Student deleted successfully!!!");
          setRefresh(!refresh);
        }
      });
  };

  const viewStudent = (student) => {
    setPopup(true);
    setData(student);
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/student/allUsers")
      .then((res) => res.json())
      .then((data) => {
        setStudents(data.users);
      });
  }, [refresh]);

  return (
    <>
      {popup ? <StudentPopup data={data} setPopup={setPopup} /> : ""}
      <div className="modify-students">
        <h2>Manage Students</h2>
        <table>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>Class</th>
              <th>Roll Number</th>
              <th>College</th>
              <th>Branch</th>
              <th>Status</th>
              <th>Delete</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, i) => {
              return (
                <tr key={i}>
                  <td>{student.fullname}</td>
                  <td>{student.email}</td>
                  <td>{student.class}</td>
                  <td>{student.roll_no}</td>
                  <td>{student.college}</td>
                  <td>{student.branch}</td>
                  <td>
                    {student.active ? (
                      <Button
                        label="De-Activate"
                        className="danger"
                        onClick={() => deactivateStudent(student._id)}
                      />
                    ) : (
                      <Button
                        label="Activate"
                        className="all-ok"
                        onClick={() => activateStudent(student._id)}
                      />
                    )}
                  </td>
                  <td>
                    <Button
                      label="Delete"
                      className="danger"
                      onClick={() => deleteStudent(student._id)}
                    />
                  </td>
                  <td>
                    <Button
                      label="View"
                      className="all-ok"
                      onClick={() => viewStudent(student)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
