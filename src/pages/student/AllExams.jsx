import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Forms";
import "./styles/AllExams.css";
import { useEffect, useState } from "react";
import { API_URL } from "../../constants";

export default function AllExams() {
  const navigate = useNavigate();
  const [upcomingExams, setUpcomingExams] = useState([]);
  const [pastExams, setPastExams] = useState([]);
  const [ongoingExams, setOngoingExams] = useState([]);
  const scores = JSON.parse(localStorage.scores);
  useEffect(() => {
    fetch(API_URL + "exam/allExams")
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
      <h3>Ongoing exams</h3>
      {ongoingExams.length === 0
        ? "There is no ongoing exam assigned to you"
        : ""}
      ;
      <div className="exams-container">
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
                disabled={scores[exam._id] ? true : false}
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
      <div className="exams-container">
        {upcomingExams.map((exam, i) => {
          return (
            <div className="exam" key={i}>
              <div>Exam Name - {exam.name}</div>
              <div>Description- {exam.desc}</div>
              <div>Class - {exam.class}</div>
              <div>Start time - {exam.startTime.replace("T", " ")}</div>
            </div>
          );
        })}
      </div>
      <h3>Past exams</h3>
      {pastExams.length === 0 ? "There is no past exam assigned to you" : ""};
      <div className="exams-container">
        {pastExams.map((exam, i) => {
          let score = 0;
          if (scores[exam._id]) {
            for (let i = 0; i < exam.qa.length; i++) {
              if (+exam.qa[i].answer === +scores[exam._id][i]) {
                score++;
              }
            }
          }
          return (
            <div className="exam" key={i}>
              <div>Exam Name - {exam.name}</div>
              <div>Description- {exam.desc}</div>
              <div>Class - {exam.class}</div>
              <div>
                Score - {score} / {exam.qa.length}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
