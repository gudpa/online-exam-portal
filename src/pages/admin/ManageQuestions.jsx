import { Button, Input } from "../../components/Forms";
import "./styles/ManageQuestions.css";
import { useState } from "react";

export default function ManageQuestions() {
  const [questions, setQuestions] = useState([
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
      options: ["", "", "", ""],
    },
  ]);
  const changeHandler = () => {};
  const addQuestion = () => {
    setQuestions([
      ...questions,
      {
        question: "",
        options: ["", "", "", ""],
      },
    ]);
  };
  return (
    <div className="conatiner">
      <div className="manage-qa-container">
        <h2 className="manage-qa-header">Manage Questions</h2>
        <form onSubmit={(e) => e.preventDefault()} className="manage-qa">
          {questions.map((qa, i) => {
            return (
              <div className="manage-qa">
                <div className="input-container">
                  <div className="label-container">
                    <label htmlFor="question">{"Question " + (i + 1)}</label>
                  </div>
                  <Input
                    className="question"
                    value={qa.question}
                    onChange={changeHandler}
                    placeholder="Question"
                    id="question"
                  />
                </div>
                <div className="options">
                  {qa.options.map((option, j) => {
                    return (
                      <div className="option input-container">
                        <div className="label-container">
                          <label htmlFor={"option-" + (j + 1)}>
                            {"Option " + (j + 1)}
                          </label>
                        </div>
                        <Input
                          className="option"
                          value={option}
                          onChange={changeHandler}
                          placeholder={"Option " + (j + 1)}
                          id={"option-" + (j + 1)}
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="delete-btn">
                  <Button label="Delete" className="danger" />
                </div>
              </div>
            );
          })}
        </form>
        <hr />
        <div className="save-add-btns">
          <Button label="Save" className="all-ok" />
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
