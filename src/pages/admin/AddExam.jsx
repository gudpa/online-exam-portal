import { useEffect, useState } from "react";
import { Button, Input, Select } from "../../components/Forms";
import { useNavigate } from "react-router-dom";

import "./styles/AddExam.css";

export default function AddExam() {
  const navigate = useNavigate();
  const initialState = {
    name: "",
    desc: "",
    class: "",
    startTime: "",
    duration: "",
  };
  const [examData, setExamData] = useState(initialState);
  const [classes, setClasses] = useState([{ name: "Select an option" }]);
  const changeHandler = (e) => {
    console.log(examData);
    setExamData({ ...examData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (!window.localStorage.adminLogin) {
      navigate("/admin/login");
    }
  }, [navigate]);
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
  useEffect(() => {
    fetch("http://localhost:5000/api/class/allClasses")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data.classes);
        setExamData({ ...examData, class: data.classes[0].name });
      });
  }, []);
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
              <Select
                onChange={changeHandler}
                name="class"
                id="std"
                value={examData.class}
                options={classes}
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
                // min={new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
                  // .toISOString()
                  // .substring(0, 16)}
              />
            </div>
            <div className="input-container">
              <div className="label-container">
                <label htmlFor="duration">Duration (mins)</label>
              </div>
              <Input
                type="number"
                name="duration"
                value={examData.duration}
                onChange={changeHandler}
                id="duration"
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
