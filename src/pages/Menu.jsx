import { useNavigate } from "react-router-dom";
import { Button } from "../components/Forms";

export default function Menu() {
  let navigate = useNavigate();
  return (
    <div>
      <Button label="Admin" onClick={() => navigate("/admin")} />
      <Button label="Student" onClick={() => navigate("/student")} />
    </div>
  );
}
