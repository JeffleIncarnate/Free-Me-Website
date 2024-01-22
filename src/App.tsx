import { lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import "./App.css";

import Navbar from "./components/navbar/navbar";
import Switcher from "./components/switcher/switcher";

// Load Pages lazyly
const HomePage = lazy(() => import("./layouts"));
const SignupConsultantPage = lazy(() => import("./layouts/signupConsultant"));
const SignupClientPage = lazy(() => import("./layouts/signupClient"));
const LoginPage = lazy(() => import("./layouts/login"));
const OauthPage = lazy(() => import("./layouts/oauth"));
const DashboardPage = lazy(() => import("./layouts/dashboard"));
const CommunityNetworkPage = lazy(() => import("./layouts/communityNetwork"));
const HardwareAndSoftwarePage = lazy(
  () => import("./layouts/hardwareAndSoftware")
);
const ProfilePage = lazy(() => import("./layouts/profile"));
const ChatPage = lazy(() => import("./layouts/chat"));
const StatementOfWorkPage = lazy(() => import("./layouts/statementOfWork"));
const BalancesPages = lazy(() => import("./layouts/balances"));
const NotificationsPage = lazy(() => import("./layouts/notifcations"));
const WatchlistPage = lazy(() => import("./layouts/watchlist"));
const SocialMediaPage = lazy(() => import("./layouts/socialMedia"));
const SearchPage = lazy(() => import("./layouts/search"));

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Navbar />
      <Switcher />
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
