import { BrowserRouter as Router, Routes, Route } from "react-router";
import { MockComponent } from "../features/MockFeature/MockComponent";
import { TenantSupport } from "../features/TenantSupport/TenantSupport";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MockComponent />}></Route>
        <Route path="/tenantsupport" element={<TenantSupport />}></Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
