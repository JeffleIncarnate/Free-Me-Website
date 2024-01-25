import "./index.scss";
import "react-toastify/dist/ReactToastify.css";

import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Navbar from "./components/navbar/navbar";
import ProtectedPage from "./pages/protected";

import HomePage from "./pages";
import SignupConsultantPage from "./pages/signupConsultant";
import SignupClientPage from "./pages/signupClient";
import LoginPage from "./pages/login";
import OauthPage from "./pages/oauth";
import DashboardPage from "./pages/dashboard";
import CommunityNetworkPage from "./pages/communityNetwork";
import HardwareAndSoftwarePage from "./pages/hardwareAndSoftware";
import ProfilePage from "./pages/profile";
import ChatPage from "./pages/chat";
import StatementOfWorkPage from "./pages/statementOfWork";
import BalancesPages from "./pages/balances";
import WatchlistPage from "./pages/watchlist";
import SocialMediaPage from "./pages/socialMedia";
import SearchPage from "./pages/search";

function App() {
  return (
    <>
      <Navbar />
      <ToastContainer pauseOnHover={false} position="top-right" theme="light" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signUpConsultant" element={<SignupConsultantPage />} />
        <Route path="/signUpClient" element={<SignupClientPage />} />
        <Route path="/oauth" element={<OauthPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedPage>
              <DashboardPage />
            </ProtectedPage>
          }
        />
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
