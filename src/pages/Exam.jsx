import { useParams } from "react-router-dom";
import "./styles/Exam.css";
import { Button } from "../components/Forms";

export default function Exam() {
  const { id } = useParams();
  const exam = {
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
  };

  return (
    <div className="exam-container">
      <div className="exam-header">
        <div>{exam.name}</div>
        <div>{exam.std}</div>
      </div>
      <div className="allQa">
        {exam.qa.map((oneQa) => {
          return (
            <div className="qa">
              <div className="question">{oneQa.question}</div>
              <div className="options">
                {oneQa.options.map((option) => {
                  return (
                    <div className="option">
                      <input type="radio" />
                      <span className="option">{option}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
        <Button label="Submit" />
      </div>
    </div>
  );
}
