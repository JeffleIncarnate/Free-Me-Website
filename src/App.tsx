import "./index.scss";
import "react-toastify/dist/ReactToastify.css";

import { Route, Routes, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useAppDispatch } from "./core/state/hooks";
import { useEffect, useRef } from "react";
import { login } from "./core/state/reducers/authSlice";
import { initialReducer } from "./core/state/initialReducer";
import { fetchSelf } from "./core/requets/fetchSelf";
import { setUserData } from "./core/state/reducers/userDataSlice";

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
import ChatPage from "./pages/chat";
import StatementOfWorkPage from "./pages/statementOfWork";
import BalancesPages from "./pages/balances";
import WatchlistPage from "./pages/watchlist";
import SocialMediaPage from "./pages/socialMedia";
import SearchPage from "./pages/search";

// Profile
import ProfileSelfPage from "./pages/profileSelf";
import ProfileOtherPage from "./pages/profileOther";

type SuccessType = {
  success: true;
  profile: {
    id: string;
    firstname: string;
    lastname: string;
    password: string;
    email: string;
    phonenumber: string;
    type: "CONSULTANT" | "CLIENT" | "FREERIDER";
    dateOfBirth: string;
    address: string;
    nzbn: string;
    gst: string;
    role: "ADMIN" | "GENERAL";
    createdAt: Date;
    profilePicture: string;
    banner: string;
    background: string;
    followers: string[];
    following: string[];
    connections: string[];
  };
  status: 200;
};

function App() {
  const dispatch = useAppDispatch();
  const initialized = useRef(false);
  const nav = useNavigate();

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;

      (async () => {
        let res = await initialReducer();

        if (!res) {
          return;
        }

        dispatch(
          login({
            accessToken: res.accessToken,
            refreshToken: res.refreshToken,
          })
        );

        const selfData = (await fetchSelf(res.accessToken)).data as SuccessType;

        dispatch(
          setUserData({
            firstname: selfData.profile.firstname,
            lastname: selfData.profile.lastname,
            type: selfData.profile.type,
            profilePicture: selfData.profile.profilePicture,
            banner: selfData.profile.banner,
            connections: selfData.profile.connections,
            following: selfData.profile.following,
            followers: selfData.profile.followers,
            createdAt: selfData.profile.createdAt,
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
        <Route path="/profile">
          <Route
            path="self"
            element={
              <ProtectedPage>
                <ProfileSelfPage />
              </ProtectedPage>
            }
          />
          <Route path=":uuid" element={<ProfileOtherPage />} />
        </Route>

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
