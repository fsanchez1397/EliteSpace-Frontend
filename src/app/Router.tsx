import { BrowserRouter as Router, Routes, Route } from "react-router";
import { MockComponent } from "../features/MockFeature/MockComponent";
import PasswordReset from "../features/PasswordReset/PasswordReset";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MockComponent />}></Route>
        <Route path="/password-reset" element={<PasswordReset />}></Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
