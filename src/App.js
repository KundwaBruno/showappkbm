import { BrowserRouter as Router } from "react-router-dom";
import ProtectedRoutes from "./Routes/Protected/index";
import UnprotectedRoutes from "./Routes/Unprotected";
import "./Styles/App.scss";

function App() {
  const authUser = localStorage.getItem("user");
  return (
    <Router>
      {!authUser && <UnprotectedRoutes />}
      {authUser && <ProtectedRoutes />}
    </Router>
  );
}

export default App;
