import { BrowserRouter as Router, Routes, Route } from "react-router";
import { MockComponent } from "../features/MockFeature/MockComponent";
import { OneTapReporting } from "../features/OneTapReporting/OneTapReporting";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MockComponent />}></Route>
        <Route path="/OneTapReporting" element={<OneTapReporting />}></Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
