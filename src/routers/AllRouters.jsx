import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import Dashboard from "../pages/dashboard/Dashboard";

const AllRoutes = () => {
  const user = useSelector((state) => state.user.user);
  const role = user?.role;

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            user ? <Navigate to="/dashboard" /> : <Navigate to="/sign-in" />
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="*" element={<PagenotFound />}></Route> */}
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
      </Routes>
    </Router>
  );
};

export default AllRoutes;
