import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Forms";
import "./styles/ManageAllExams.css";
import { useEffect, useState } from "react";

export default function ManageAllExams() {
  const navigate = useNavigate();
  const [exams, setExams] = useState([]);
  useEffect(() => {
    if (!window.localStorage.adminLogin) {
      navigate("/admin/login");
    }
  }, [navigate]);
  useEffect(() => {
    fetch("http://localhost:5000/api/exam/allExams")
      .then((res) => res.json())
      .then((data) => {
        setExams(data.exams);
      });
  }, []);
  return (
    <div className="all-exams">
      {exams.length > 0 &&
        exams.map((exam, i) => {
          return (
            <div className="exam" key={i}>
              <div>Exam Name - {exam.name}</div>
              <div>Description- {exam.desc}</div>
              <div>Class - {exam.class}</div>
              <Button
                label="Manage Questions"
                className="start-exam-btn"
                onClick={() => navigate(exam._id)}
              />
            </div>
          );
        })}
      {exams.length === 0 && "No Exams found!!!"}
    </div>
  );
}
