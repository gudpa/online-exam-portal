import "./App.css";
import Header from "./components/Header";
import AddStudents from "./pages/admin/AddStudents";
import AdminLogin from "./pages/admin/AdminLogin";
import AllExams from "./pages/student/AllExams";
import Exam from "./pages/student/Exam";
import StudentLogin from "./pages/student/StudentLogin";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/student" element={<StudentLogin />} />
          <Route path="/student/login" element={<StudentLogin />} />
          <Route path="/student/exams/:id" element={<Exam />} />
          <Route path="/student/exams" element={<AllExams />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/addstudents" element={<AddStudents />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
