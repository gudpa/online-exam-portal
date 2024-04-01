import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Forms";
import "./styles/AllExams.css";
import { useEffect, useState } from "react";

export default function AllExams() {
  const navigate = useNavigate();
  const [upcomingExams, setUpcomingExams] = useState([]);
  const [pastExams, setPastExams] = useState([]);
  const [ongoingExams, setOngoingExams] = useState([]);
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
        setUpcomingExams([...upcomingExams]);
        setPastExams([...pastExams]);
        setOngoingExams([...ongoingExams]);
      });
  }, []);
  return (
    <div className="all-exams-container">
      <h3>Ongoing exams</h3>
      {ongoingExams.length === 0
        ? "There is no ongoing exam assigned to you"
        : ""}
      ;
      <div className="exam-container">
        {ongoingExams.map((exam, i) => {
          return (
            <div className="exam" key={i}>
              <div>Exam Name - {exam.name}</div>
              <div>Description- {exam.desc}</div>
              <div>Class - {exam.class}</div>
              <Button
                label="Start Exam"
                className="start-exam-btn"
                onClick={() => navigate(exam._id)}
              />
            </div>
          );
        })}
      </div>
      <h3>Upcoming exams</h3>
      {upcomingExams.length === 0
        ? "There is no upcoming exam assigned to you"
        : ""}
      ;
      <div className="exam-container">
        {upcomingExams.map((exam, i) => {
          return (
            <div className="exam" key={i}>
              <div>Exam Name - {exam.name}</div>
              <div>Description- {exam.desc}</div>
              <div>Class - {exam.class}</div>
            </div>
          );
        })}
      </div>
      <h3>Past exams</h3>
      {pastExams.length === 0 ? "There is no past exam assigned to you" : ""};
      <div className="exam-container">
        {pastExams.map((exam, i) => {
          return (
            <div className="exam" key={i}>
              <div>Exam Name - {exam.name}</div>
              <div>Description- {exam.desc}</div>
              <div>Class - {exam.class}</div>
              <div>Score - </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
