import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import "./App.css";

import HomePage from "./layouts";
import SignupConsultantPage from "./layouts/signupConsultant";
import SignupClientPage from "./layouts/signupClient";
import LoginPage from "./layouts/login";
import OauthPage from "./layouts/oauth";
import DashboardPage from "./layouts/dashboard";
import CommunityNetworkPage from "./layouts/communityNetwork";
import HardwareAndSoftwarePage from "./layouts/hardwareAndSoftware";
import ProfilePage from "./layouts/profile";
import ChatPage from "./layouts/chat";
import StatementOfWorkPage from "./layouts/statementOfWork";
import BalancesPages from "./layouts/balances";
import NotificationsPage from "./layouts/notifcations";
import WatchlistPage from "./layouts/watchlist";
import SocialMediaPage from "./layouts/socialMedia";
import SearchPage from "./layouts/search";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signUpConsultant" element={<SignupConsultantPage />} />
        <Route path="/signUpClient" element={<SignupClientPage />} />
        <Route path="/oauth" element={<OauthPage />} />
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
        <Route path="/watchlist" element={<WatchlistPage />} />
        <Route path="/socialMedia" element={<SocialMediaPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
