import { useNavigate } from "react-router-dom";
import { Button } from "../components/Forms";
import "./styles/AllExams.css";

export default function AllExams() {
  const navigate = useNavigate();
  const exams = [
    {
      id: "1",
      name: "Exam 1",
      desc: "Description 1",
      std: "Std 1",
      startTime: "start time 1",
      endTime: "end time 1",
      qa: [
        {
          question: "Question 1",
          options: ["option 1", "option 2", "option 3", "option 4"],
        },
        {
          question: "Question 2",
          options: ["option 1", "option 2", "option 3", "option 4"],
        },
        {
          question: "Question 3",
          options: ["option 1", "option 2", "option 3", "option 4"],
        },
      ],
    },
    {
      id: "2",
      name: "Exam 2",
      desc: "Description 2",
      std: "Std 2",
      startTime: "start time 2",
      endTime: "end time 2",
      qa: [
        {
          question: "Question 1",
          options: ["option 1", "option 2", "option 3", "option 4"],
        },
        {
          question: "Question 2",
          options: ["option 1", "option 2", "option 3", "option 4"],
        },
        {
          question: "Question 3",
          options: ["option 1", "option 2", "option 3", "option 4"],
        },
      ],
    },
    {
      id: "3",
      name: "Exam 3",
      desc: "Description 3",
      std: "Std 3",
      startTime: "start time 3",
      endTime: "end time 3",
      qa: [
        {
          question: "Question 1",
          options: ["option 1", "option 2", "option 3", "option 4"],
        },
        {
          question: "Question 2",
          options: ["option 1", "option 2", "option 3", "option 4"],
        },
        {
          question: "Question 3",
          options: ["option 1", "option 2", "option 3", "option 4"],
        },
      ],
    },
  ];
  return (
    <div className="all-exams">
      {exams.map((exam) => {
        return (
          <div className="exam">
            <div>Exam Name - {exam.name}</div>
            <div>Description- {exam.desc}</div>
            <div>Class - {exam.std}</div>
            <Button
              label="Start Exam"
              className="start-exam-btn"
              onClick={() => navigate(exam.id)}
            />
          </div>
        );
      })}
    </div>
  );
}
