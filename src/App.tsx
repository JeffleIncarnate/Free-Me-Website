import { Route, Routes } from "react-router-dom";

import "./App.css";

import HomePage from "./layouts";
import SignupConsultantPage from "./layouts/signupConsultant";
import LoginPage from "./layouts/login";
import OauthPage from "./layouts/oauth";
import OpportunitiesPage from "./layouts/opportunities";
import DashboardPage from "./layouts/dashboard";
import CommunityNetworkPage from "./layouts/communityNetwork";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signUpConsultant" element={<SignupConsultantPage />} />
      <Route path="/oauth" element={<OauthPage />} />
      <Route path="/opportunities" element={<OpportunitiesPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/communityNetwork" element={<CommunityNetworkPage />} />
    </Routes>
  );
}

export default App;
