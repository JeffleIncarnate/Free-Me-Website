import "./dashboard.scss";

import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../core/state/hooks";
import { selectAccessToken } from "../../core/state/reducers/authSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { setUserData } from "../../core/state/reducers/userDataSlice";

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

export default function Dashboard() {
  const token = useAppSelector(selectAccessToken);
  const nav = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      let res;

      try {
        res = await axios.get("http://localhost:3000/v1/api/user/self", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } catch (err) {
        nav("/");
        return;
      }

      const data = res.data as SuccessType;

      dispatch(
        setUserData({
          firstname: data.profile.firstname,
          lastname: data.profile.lastname,
          type: data.profile.type,
          profilePicture: data.profile.profilePicture,
          banner: data.profile.banner,
          connections: data.profile.connections,
          following: data.profile.following,
          followers: data.profile.followers,
          createdAt: data.profile.createdAt,
        })
      );
    })();
  }, []);

  return <main>e</main>;
}
