import "./styles/StudentForm.css";
import { Button } from "../../components/Forms";

export default function StudentForm() {
  const data = JSON.parse(window.localStorage.userData);
  const printHandler = () => {
    window.print();
  };
  return (
    <div className="print-data-main">
      <div className="print-data-container">
        <div className="print-btn-container">
          <Button label="Print" onClick={printHandler} />
        </div>
        <table className="print-data">
          <tr>
            <td>Full name</td>
            <td>{data.fullname}</td>
          </tr>
          <tr>
            <td>Father's name</td>
            <td>{data.fathersname}</td>
          </tr>
          <tr>
            <td>Mother's name</td>
            <td>{data.mothersname}</td>
          </tr>
          <tr>
            <td>Email id</td>
            <td>{data.email}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>{data.gender}</td>
          </tr>
          <tr>
            <td>DOB</td>
            <td>{data.dob}</td>
          </tr>
          <tr>
            <td>Religion</td>
            <td>{data.religion}</td>
          </tr>
          <tr>
            <td>Mother Tongue</td>
            <td>{data.motherTounge}</td>
          </tr>
          <tr>
            <td>Family Income</td>
            <td>{data.familyIncome}</td>
          </tr>
          <tr>
            <td>Nationality</td>
            <td>{data.nationality}</td>
          </tr>
          <tr>
            <td>Address Line 1</td>
            <td>{data.addressLine1}</td>
          </tr>
          <tr>
            <td>Address Line 2</td>
            <td>{data.addressLine2}</td>
          </tr>
          <tr>
            <td>State</td>
            <td>{data.state}</td>
          </tr>
          <tr>
            <td>Taluka</td>
            <td>{data.taluka}</td>
          </tr>
          <tr>
            <td>Pincode</td>
            <td>{data.pincode}</td>
          </tr>
          <tr>
            <td>Class</td>
            <td>{data.class}</td>
          </tr>
          <tr>
            <td>Roll No</td>
            <td>{data.roll_no}</td>
          </tr>
          <tr>
            <td>College Name</td>
            <td>{data.college}</td>
          </tr>
          <tr>
            <td>Branch Name</td>
            <td>{data.branch}</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
