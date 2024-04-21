import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Forms";
import "./styles/ManageAllExams.css";
import { useEffect, useState } from "react";

export default function ManageAllExams() {
  const navigate = useNavigate();
  const [upcomingExams, setUpcomingExams] = useState([]);
  const [pastExams, setPastExams] = useState([]);
  const [ongoingExams, setOngoingExams] = useState([]);
  useEffect(() => {
    if (!window.localStorage.adminLogin) {
      navigate("/admin/login");
    }
  }, [navigate]);
  useEffect(() => {
    fetch("http://localhost:5000/api/exam/allExams")
      .then((res) => res.json())
      .then((data) => {
        let exams = data.exams;
        for (let i = 0; i < exams.length; i++) {
          let time = +new Date(exams[i].startTime);
          let duration = exams[i].duration * 60 * 1000;
          let curr = +new Date();
          if (curr > time + duration) {
            pastExams.push(exams[i]);
          } else if (curr < time) {
            upcomingExams.push(exams[i]);
          } else {
            ongoingExams.push(exams[i]);
          }
        }
        setUpcomingExams((upcomingExams) => [...upcomingExams]);
        setPastExams((pastExams) => [...pastExams]);
        setOngoingExams((ongoingExams) => ongoingExams);
      });
  }, []);
  return (
    <div className="all-exams-container">
      <h3>Upcoming exams</h3>
      <div className="exams-container">
        {upcomingExams.map((exam, i) => {
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
      </div>
      <h3>Ongoing and Past exams</h3>

      <div className="exams-container">
        {ongoingExams.map((exam, i) => {
          return (
            <div className="exam" key={i}>
              <div>Exam Name - {exam.name}</div>
              <div>Description- {exam.desc}</div>
              <div>Class - {exam.class}</div>
              <Button
                label="Ongoing exam"
                className="start-exam-btn"
                disabled
              />
            </div>
          );
        })}
        {pastExams.map((exam, i) => {
          return (
            <div className="exam" key={i}>
              <div>Exam Name - {exam.name}</div>
              <div>Description- {exam.desc}</div>
              <div>Class - {exam.class}</div>
              <Button label="Past exam" className="start-exam-btn" disabled />
            </div>
          );
        })}
      </div>
    </div>
  );
}
