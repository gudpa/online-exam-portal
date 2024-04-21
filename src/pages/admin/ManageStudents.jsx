import { useEffect } from "react";
import ModifyStudents from "./ModifyStudents";
import { useNavigate } from "react-router-dom";
import AddStudents from "./AddStudents";

export default function ManageStudents() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!window.localStorage.adminLogin) {
      navigate("/admin/addExam");
    }
  }, [navigate]);
  return (
    <>
      <AddStudents />
      <ModifyStudents />
    </>
  );
}
