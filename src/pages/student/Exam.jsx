import { useParams } from "react-router-dom";
import "./styles/Exam.css";
import { Button } from "../../components/Forms";
import { useEffect, useState } from "react";

export default function Exam() {
  const { id } = useParams();
  const [sol, setSol] = useState([]);
  //API to be called for exam using params id
  const [exam, setExam] = useState({
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
  });

  useEffect(() => {
    let temp = [];
    temp.length = exam.qa.length;
    temp.fill(-1);
    setSol([...temp]);
  }, [exam.qa]);

  const changeOption = (i, j) => {
    let temp = sol;
    temp[i] = j;
    setSol([...temp]);
  };

  const clearOption = (i) => {
    let temp = sol;
    temp[i] = -1;
    setSol([...temp]);
  };

  const submitExam = async () => {
    let studentId = localStorage.userId;
    let res = fetch(
      "http://localhost:5000/api/student/submitExam/" + studentId + "/" + id,
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ solution: sol }),
      }
    );
  };

  return (
    <div className="exam-container">
      <div className="exam-header">
        <div>{exam.name}</div>
        <div>{exam.std}</div>
      </div>
      <div className="allQa">
        {exam.qa.map((oneQa, i) => {
          return (
            <div className="qa" key={i}>
              <div className="question">{oneQa.question}</div>
              <div className="options">
                {oneQa.options.map((option, j) => {
                  return (
                    <div className="option" key={j}>
                      <input
                        type="radio"
                        name={"question-" + i}
                        id={"question-" + i + "-option-" + j}
                        checked={sol[i] === j}
                        onChange={() => changeOption(i, j)}
                      />
                      <label
                        className="option"
                        htmlFor={"question-" + i + "-option-" + j}
                      >
                        {option}
                      </label>
                    </div>
                  );
                })}
              </div>
              <button onClick={() => clearOption(i)}>Clear</button>
            </div>
          );
        })}
        <Button label="Submit" onClick={submitExam} />
      </div>
    </div>
  );
}
