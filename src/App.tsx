import "./index.scss";
import "react-toastify/dist/ReactToastify.css";

import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Navbar from "./components/navbar/navbar";

import HomePage from "./pages/home";

function App() {
  return (
    <>
      <Navbar />
      <ToastContainer pauseOnHover={false} position="top-right" theme="light" />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
