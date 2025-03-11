import { BrowserRouter as Router, Routes, Route } from "react-router";
import SignupPage from "../features/auth/SignupPage";
import HomePage from "./routes/HomePage";
import Login from "../features/Login/Login";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        ></Route>
        <Route
          path="/register"
          element={<SignupPage />}
        />
        <Route
          path="/login"
          element={<Login />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
