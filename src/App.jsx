import "./App.css";
import Header from "./components/Header";
import Menu from "./pages/Menu";
import AddExam from "./pages/admin/AddExam";
import AdminLogin from "./pages/admin/AdminLogin";
import ViewAllExams from "./pages/admin/ViewAllExams";
import ManageQuestions from "./pages/admin/ManageQuestions";
import ManageStudents from "./pages/admin/ManageStudents";
import AllExams from "./pages/student/AllExams";
import Exam from "./pages/student/Exam";
import StudentLogin from "./pages/student/StudentLogin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentSignup from "./pages/student/StudentSignup";
import StudentForm from "./pages/student/StudentForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/student" element={<StudentLogin />} />
          <Route path="/student/login" element={<StudentLogin />} />
          <Route path="/student/signup" element={<StudentSignup />} />
          <Route path="/student/exams/:id" element={<Exam />} />
          <Route path="/student/exams" element={<AllExams />} />
          <Route path="/student/form" element={<StudentForm />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/managestudents" element={<ManageStudents />} />
          <Route path="/admin/addexam" element={<AddExam />} />
          <Route path="/admin/manageQuestions" element={<ViewAllExams />} />
          <Route path="/admin/manageQuestions/:id" element={<ManageQuestions />} />
          <Route path="/" element={<Menu />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
