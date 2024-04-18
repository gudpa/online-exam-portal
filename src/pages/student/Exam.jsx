import { useNavigate, useParams } from "react-router-dom";
import "./styles/Exam.css";
import { Button } from "../../components/Forms";
import { useEffect, useState } from "react";

export default function Exam() {
  const { id } = useParams();
  const [sol, setSol] = useState([]);
  const navigate = useNavigate();
  //API to be called for exam using params id
  const [exam, setExam] = useState({ qa: [] });

  useEffect(() => {
    fetch("http://localhost:5000/api/exam/viewQuestions/" + id)
      .then((res) => res.json())
      .then((data) => {
        setExam(data.exams[0]);
      });
  }, [id]);
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
    let res = await fetch(
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
    if (res.status === 200) {
      let scores = JSON.parse(localStorage.scores);
      scores[id] = sol;
      localStorage.scores = JSON.stringify(scores);
      navigate("/student/exams");
    }
  };

  return (
    <div className="exam-container">
      <div className="exam-header">
        <div>{exam.name}</div>
        <div>{exam.std}</div>
      </div>
      <div className="allQa">
        {exam?.qa.map((oneQa, i) => {
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
