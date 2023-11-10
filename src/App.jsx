import "./App.css";
import Header from "./components/Header";
import AllExams from "./pages/AllExams";
import Exam from "./pages/Exam";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/exams/:id" element={<Exam />} />
          <Route path="/exams" element={<AllExams />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
