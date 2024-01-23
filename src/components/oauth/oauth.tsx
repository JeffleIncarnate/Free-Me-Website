import { useMutation } from "@tanstack/react-query";
import "./oauth.scss";

import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchSelf } from "../../core/requets/fetchSelf";
import { useAppDispatch, useAppSelector } from "../../core/state/hooks";
import { selectAccessToken } from "../../core/state/reducers/authSlice";
import { setUserData } from "../../core/state/reducers/userDataSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

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

export default function OAuth() {
  const codeRef = useRef<HTMLInputElement | null>(null);
  const accessToken = useAppSelector(selectAccessToken);
  const nav = useNavigate();
  const dispatch = useAppDispatch();

  const mutate = useMutation({
    mutationFn: fetchSelf,
    onSuccess: (ctx) => {
      const data = ctx.data as SuccessType;

      console.log(data.profile.profilePicture);

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

      nav("/dashboard");
    },
    onError: (ctx) => {
      toast.error("There was some error while authenticating your token");

      setTimeout(() => {
        nav("/");
      }, 5000);
    },
  });

  const handleCodeEnter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (codeRef.current === null) {
      toast.error("Please enter a code");
      return;
    }

    let code: number = parseInt(codeRef.current.value);

    if (code !== 1) {
      toast.error("The code you've entered is incorrect");
      return;
    }

    if (!accessToken) {
      nav("/");
      return;
    }

    mutate.mutate(accessToken);
  };

  return (
    <main className="OAuth">
      <form onSubmit={handleCodeEnter}>
        <h2>2 Factor</h2>
        <div>
          <label>
            2 Factor Code<span>*</span>
          </label>
          <input
            type="number"
            placeholder="Enter Code"
            required
            ref={codeRef}
          />
        </div>
        <button disabled={mutate.isPending} type="submit">
          {mutate.isPending ? (
            <>
              <FontAwesomeIcon icon={faCircleNotch} spin /> Loading...
            </>
          ) : (
            "Sign In"
          )}
        </button>
      </form>
    </main>
  );
}
