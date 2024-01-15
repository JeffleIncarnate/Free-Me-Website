import "./index.scss";
import "react-toastify/dist/ReactToastify.css";

import { useEffect, useRef } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { initialReducer } from "./core/state/initialReducer";
import { useAppDispatch } from "./core/state/hooks";
import { login } from "./core/state/reducers/authSlice";

import Navbar from "./components/navbar/navbar";

import HomePage from "./pages/home";
import DashboardPage from "./pages/dashboard";

import ProtectedRoute from "./pages/protected";

function App() {
  const dispatch = useAppDispatch();
  const initialized = useRef(false);
  const nav = useNavigate();

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;

      (async () => {
        let res = await initialReducer();

        if (!res.success) {
          return;
        }

        dispatch(
          login({
            accessToken: res.accessToken,
            refreshToken: res.refreshToken,
          })
        );

        nav("/dashboard ");
      })();
    }
  }, []);

  return (
    <>
      <Navbar />
      <ToastContainer pauseOnHover={false} position="top-right" theme="light" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/dashboard"
          element={<ProtectedRoute children={<DashboardPage />} />}
        />
      </Routes>
    </>
  );
}

export default App;
