import "./index.scss";
import "react-toastify/dist/ReactToastify.css";

import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Navbar from "./components/navbar/navbar";

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
import WatchlistPage from "./layouts/watchlist";
import SocialMediaPage from "./layouts/socialMedia";
import SearchPage from "./layouts/search";

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <ToastContainer pauseOnHover={false} position="top-right" theme="light" />
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
        <Route
          path="/communityNetwork/hardware"
          element={<HardwareAndSoftwarePage />}
        ></Route>
        <Route path="/watchlist" element={<WatchlistPage />} />
        <Route path="/socialMedia" element={<SocialMediaPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </>
  );
}

export default App;
