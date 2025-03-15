import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "./routes/HomePage";
import RegisterPage from "../features/auth/Register";
import Login from "../features/Login/Login";
import GuestParking from "../features/GuestParking/GuestParking";
import GuestParkingApproved from "../features/GuestParking/GuestParkingApproved";
import { TenantSupport } from "../features/TenantSupport/TenantSupport";
import GuestAccess from "../features/GuestAccess/GuestAccess";
import GuestAccessKey from "../features/GuestAccess/GuestKey";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>

        <Route path="/register" element={<RegisterPage />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/parking' element={<GuestParking />}/>
        <Route path='/parking/approved' element={<GuestParkingApproved />}/>
        <Route path="/tenant-support" element={<TenantSupport />}/>
        <Route path="/guestaccess" element={<GuestAccess />} />
        <Route path="/guestaccess/key" element={<GuestAccessKey />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
