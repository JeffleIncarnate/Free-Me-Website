import { Route, Routes } from "react-router-dom";

import "./App.css";

import HomePage from "./layouts";
import SignupConsultantPage from "./layouts/signupConsultant";
import LoginPage from "./layouts/login";
import OauthPage from "./layouts/oauth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signUpConsultant" element={<SignupConsultantPage />} />
      <Route path="/oauth" element={<OauthPage />} />
    </Routes>
  );
}

export default App;
