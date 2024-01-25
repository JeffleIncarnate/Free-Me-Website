import "./index.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faLink,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useQuery } from "@tanstack/react-query";
import { store } from "../../../core/state/store";
import { fetchSelf } from "../../../core/requets/fetchSelf";
import { HashLoader } from "react-spinners";
import { CSSProperties } from "react";
import { Link } from "react-router-dom";

const override: CSSProperties = {
  display: "block",
  margin: "12rem auto",
};

type SuccessTypeClient = {
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
    consultantProfile?: {
      id: number;
      description: string;
      location: string;
      tier: string;
      values: string[];
      skills: string[];
      education: string[];
      ambitions: string[];
      awards: string[];
      hobbies: string[];
      timeline: object;
      userId: string;
    };
  };
  status: 200;
};

type SuccessTypeConsultant = {
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
    consultantProfile?: {
      id: number;
      description: string;
      location: string;
      tier: string;
      values: string[];
      skills: string[];
      education: string[];
      ambitions: string[];
      awards: string[];
      hobbies: string[];
      timeline: object;
      userId: string;
    };
  };
  status: 200;
};

export default function ProfileSelf() {
  const token = store.getState().auth.accessToken || "";

  const { isLoading, isError, data } = useQuery({
    queryKey: ["getUserDataForProfile"],
    queryFn: () => fetchSelf(token),
  });

  if (isLoading) {
    return <HashLoader cssOverride={override} color="#d35f12" size={150} />;
  }

  if (isError || data === undefined) {
    return (
      <h2>
        Some Unknown Error has occoured{" "}
        <Link to={"/dashboard"}>return to dashboard</Link>
      </h2>
    );
  }

  const userData = data.data as SuccessTypeClient | SuccessTypeConsultant;

  if (!userData.profile.consultantProfile) {
    return <ClientProfile userData={userData} />;
  }
  return <ConsultantProfile userData={userData} />;
}

function ConsultantProfile({ userData }: { userData: SuccessTypeConsultant }) {
  return (
    <main className="Profile__Self">
      <div className="General">
        <div className="Images">
          <div
            className="Banner"
            style={{
              backgroundImage: `url("${"data:image/jpeg;base64,"}${
                userData.profile.banner
              }")`,
            }}
          ></div>
          <div
            className="ProfilePicture"
            style={{
              backgroundImage: `url("${"data:image/jpeg;base64,"}${
                userData.profile.profilePicture
              }")`,
            }}
          ></div>
        </div>

        <div className="Info">
          <h2>{`${userData.profile.firstname} ${userData.profile.lastname}`}</h2>
          <div className="Info__Inner">
            <p>
              <FontAwesomeIcon icon={faLocationDot} /> Auckland
            </p>
            <p>
              <FontAwesomeIcon icon={faLink} /> dhruvrayat.com
            </p>
            <p>
              <FontAwesomeIcon icon={faCalendarDays} /> Joined October 2021
            </p>
          </div>

          <div className="FollowersFollowingConnections">
            <p>8 Followers</p>
            <p>10 Following</p>
            <p>10 Connections</p>
          </div>
        </div>
      </div>

      <div className="TimeLine"></div>

      {/* <div className="Data"></div>
  <div className="Posts"></div> */}
    </main>
  );
}

function ClientProfile({ userData }: { userData: SuccessTypeClient }) {
  return (
    <main className="Profile__Self">
      <div className="General">
        <div className="Images">
          <div
            className="Banner"
            style={{
              backgroundImage: `url("${"data:image/jpeg;base64,"}${
                userData.profile.banner
              }")`,
            }}
          ></div>
          <div
            className="ProfilePicture"
            style={{
              backgroundImage: `url("${"data:image/jpeg;base64,"}${
                userData.profile.profilePicture
              }")`,
            }}
          ></div>
        </div>

        <div className="Info">
          <h2>{`${userData.profile.firstname} ${userData.profile.lastname}`}</h2>
          <div className="Info__Inner">
            <p>
              <FontAwesomeIcon icon={faLocationDot} /> Auckland
            </p>
            <p>
              <FontAwesomeIcon icon={faLink} /> dhruvrayat.com
            </p>
            <p>
              <FontAwesomeIcon icon={faCalendarDays} /> Joined October 2021
            </p>
          </div>

          <div className="FollowersFollowingConnections">
            <p>8 Followers</p>
            <p>10 Following</p>
            <p>10 Connections</p>
          </div>
        </div>
      </div>

      <div className="TimeLine"></div>

      {/* <div className="Data"></div>
  <div className="Posts"></div> */}
    </main>
  );
}
