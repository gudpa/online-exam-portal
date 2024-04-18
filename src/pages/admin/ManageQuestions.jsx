import { useNavigate, useParams } from "react-router-dom";
import { Button, Input } from "../../components/Forms";
import "./styles/ManageQuestions.css";
import { useEffect, useState } from "react";

export default function ManageQuestions() {
  const { id } = useParams();
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!window.localStorage.adminLogin) {
      navigate("/admin/login");
    }
  }, [navigate]);
  useEffect(() => {
    fetch("http://localhost:5000/api/exam/viewQuestions/" + id)
      .then((res) => res.json())
      .then((data) => setQuestions(data.exams[0].qa));
  }, [id]);

  const changeQuestion = (e, i) => {
    let temp = questions;
    temp[i].question = e.target.value;
    setQuestions([...temp]);
  };
  const changeOption = (e, i, j) => {
    let temp = questions;
    temp[i].options[j] = e.target.value;
    setQuestions([...temp]);
  };
  const changeAnswer = (e, i) => {
    let temp = questions;
    temp[i].answer = e.target.value;
    setQuestions([...temp]);
  };
  const deleteQuestion = (i) => {
    let temp = questions;
    temp.splice(i, 1);
    setQuestions([...temp]);
  };
  const addQuestion = () => {
    setQuestions([
      ...questions,
      {
        question: "",
        options: ["", "", "", ""],
        answer: '0',
      },
    ]);
  };
  const saveQuestions = () => {
    fetch("http://localhost:5000/api/exam/modifyQuestions/" + id, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ qa: questions }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "ok") {
          alert("Questions updated successfully!!!");
        }
      });
  };
  
  return (
    <div className="conatiner">
      <div className="manage-qa-container">
        <h2 className="manage-qa-header">Manage Questions</h2>
        {questions.length > 0 && (
          <form onSubmit={(e) => e.preventDefault()} className="manage-qa">
            {questions.length > 0 &&
              questions.map((qa, i) => {
                return (
                  <div key={i}>
                    <div className="manage-qa">
                      <div className="input-container">
                        <div className="label-container">
                          <label htmlFor="question">
                            {"Question " + (i + 1)}
                          </label>
                        </div>
                        <Input
                          className="question"
                          value={qa.question}
                          onChange={(e) => changeQuestion(e, i)}
                          placeholder="Question"
                          id="question"
                        />
                      </div>
                      <div className="options">
                        {qa.options.map((option, j) => {
                          return (
                            <div className="option input-container" key={j}>
                              <div className="label-container">
                                <label htmlFor={"option-" + (j + 1)}>
                                  {"Option " + (j + 1)}
                                </label>
                              </div>
                              <Input
                                className="option"
                                value={option}
                                placeholder={"Option " + (j + 1)}
                                id={"option-" + (j + 1)}
                                onChange={(e) => changeOption(e, i, j)}
                              />
                            </div>
                          );
                        })}

                        <div className="option input-container">
                          <div className="label-container">
                            <label htmlFor="answer">Correct Answer</label>
                          </div>
                          <select
                            name="answer"
                            onChange={(e) => changeAnswer(e, i)}
                            value={questions[i].answer}
                          >
                            <option value="0">Option 1</option>
                            <option value="1">Option 2</option>
                            <option value="2">Option 3</option>
                            <option value="3">Option 4</option>
                          </select>
                        </div>
                      </div>
                      <div className="delete-btn">
                        <Button
                          label="Delete"
                          className="danger"
                          onClick={() => deleteQuestion(i)}
                        />
                      </div>
                    </div>
                    <hr />
                  </div>
                );
              })}
          </form>
        )}
        <div className="save-add-btns">
          <Button label="Save" className="all-ok" onClick={saveQuestions} />
          <Button
            label="Add Question"
            className="all-ok"
            onClick={addQuestion}
          />
        </div>
      </div>
    </div>
  );
}
