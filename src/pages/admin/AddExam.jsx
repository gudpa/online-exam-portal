import "./styles/AddExam.css";
import { useState } from "react";
import { Button, Input } from "../../components/Forms";

export default function AddExam() {
  const initialState = {
    name: "",
    desc: "",
    std: "",
    startTime: "",
    endTime: "",
  };
  const [examData, setExamData] = useState(initialState);
  const changeHandler = (e) => {
    setExamData({ ...examData, [e.target.name]: e.target.value });
  };
  const clickHandler = async () => {
    let res = await fetch("http://localhost:5000/api/exam/newExam", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(examData),
    });
    let data = await res.json();
    if (data.status === "ok") {
      setExamData(initialState);
      alert("Exam added sucessfully!!!");
    }
  };
  return (
    <div className="container">
      <div className="add-exam-container">
        <h2>Add Exam</h2>
        <form onSubmit={(e) => e.preventDefault()} className="add-exam">
          <div className="input-container">
            <div className="label-container">
              <label htmlFor="name">Exam name</label>
            </div>
            <Input
              type="text"
              name="name"
              value={examData.name}
              onChange={changeHandler}
              id="name"
            />
          </div>
          <div className="input-container">
            <div className="label-container">
              <label htmlFor="desc">Exam description</label>
            </div>
            <textarea
              type="textarea"
              name="desc"
              value={examData.desc}
              onChange={changeHandler}
              id="desc"
            />
          </div>
          <div className="small-container">
            <div className="input-container">
              <div className="label-container">
                <label htmlFor="std">Class</label>
              </div>
              <Input
                type="text"
                name="std"
                value={examData.std}
                onChange={changeHandler}
                id="std"
              />
            </div>
            <div className="input-container">
              <div className="label-container">
                <label htmlFor="startTime">Start time</label>
              </div>
              <Input
                type="datetime-local"
                name="startTime"
                value={examData.startTime}
                onChange={changeHandler}
                id="startTime"
              />
            </div>
            <div className="input-container">
              <div className="label-container">
                <label htmlFor="endTime">End time</label>
              </div>
              <Input
                type="datetime-local"
                name="endTime"
                value={examData.endTime}
                onChange={changeHandler}
                id="endTime"
              />
            </div>
            <div className="input-container save-btn-container">
              <Button label="Save" onClick={clickHandler} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
