import "./App.css";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import SignIn from "./pages/auth/SignIn";
import AllRoutes from "./routers/AllRouters";

const App = () => {
  const userState = useSelector((state) => state.user);
  console.log(userState);
  return (
    <div className="App">
      <ToastContainer position="top-center" autoClose={3000} />

      {/* {userState.user ? <AllRoutes /> : <SignIn />} */}
      <AllRoutes />
    </div>
  );
};

export default App;
