import "./styles/ModifyStudents.css";
import { Button } from "../../components/Forms";

export default function ModifyStudents() {
  const students = [
    {
      std: "class",
      roll_no: "roll",
      name: "name",
      username: 100,
      active: false,
    },
    {
      std: "class",
      roll_no: "roll4",
      name: "name",
      username: 100,
      active: true,
    },
    {
      std: "class",
      roll_no: "roll1",
      name: "name",
      username: 100,
      active: true,
    },
    {
      std: "class",
      roll_no: "roll2",
      name: "name",
      username: 100,
      active: true,
    },
    {
      std: "class",
      roll_no: "roll3",
      name: "name",
      username: 100,
      active: true,
    },
  ];
  const activateStudent = () => {};
  const deactivateStudent = () => {};
  return (
    <div className="modify-students">
      <h2>Modify Students</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Class</th>
            <th>Roll Number</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => {
            return (
              <tr>
                <td>{student.username}</td>
                <td>{student.name}</td>
                <td>{student.std}</td>
                <td>{student.roll_no}</td>
                <td>
                  {student.active ? (
                    <Button
                      label="De-Activate"
                      className="danger"
                      onClick={() => deactivateStudent()}
                    />
                  ) : (
                    <Button
                      label="Activate"
                      className="all-ok"
                      onClick={() => activateStudent()}
                    />
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
