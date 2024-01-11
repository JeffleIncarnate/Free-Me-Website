import "./index.scss";

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/navbar";

import HomePage from "./pages/home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
