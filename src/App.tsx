import { Route, Routes } from "react-router-dom";

import "./App.css";

import HomePage from "./layouts";
import SignupConsultantPage from "./layouts/signupConsultant";
import LoginPage from "./layouts/login";
import OauthPage from "./layouts/oauth";
import OpportunitiesPage from "./layouts/opportunities";
import DashboardPage from "./layouts/dashboard";
import CommunityNetworkPage from "./layouts/communityNetwork";
import HardwareAndSoftwarePage from "./layouts/hardwareAndSoftware";
import ProfilePage from "./layouts/profile";
import ChatPage from "./layouts/chat";
import StatementOfWorkPage from "./layouts/statementOfWork";
import BalancesPages from "./layouts/balances";
import NotificationsPage from "./layouts/notifcations";

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
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/sow" element={<StatementOfWorkPage />} />
      <Route path="/balances" element={<BalancesPages />} />
      <Route path="/notifications" element={<NotificationsPage />} />
      <Route
        path="/communityNetwork/hardware"
        element={<HardwareAndSoftwarePage />}
      ></Route>
    </Routes>
  );
}

export default App;
