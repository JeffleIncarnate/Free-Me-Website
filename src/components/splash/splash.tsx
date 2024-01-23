import "./splash.scss";

import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faCircleNotch,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { loginRequest } from "../../core/requets/login";
import { useAppDispatch } from "../../core/state/hooks";
import { login } from "../../core/state/reducers/authSlice";

type Success = {
  success: true;
  accessToken: string;
  refreshToken: string;
};

export default function Splash() {
  const [passwordShown, setPasswordShown] = useState<boolean>(false);

  const email = useRef<HTMLInputElement | null>(null);
  const password = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();

  const nav = useNavigate();

  const mutate = useMutation({
    mutationFn: loginRequest,
    onSuccess: (ctx) => {
      const data: Success = ctx.data;

      dispatch(
        login({
          accessToken: data.accessToken,
          refreshToken: data.refreshToken,
        })
      );

      localStorage.setItem("refreshToken", data.refreshToken);
      sessionStorage.setItem("accessToken", data.accessToken);

      nav("/oauth");
    },
    onError: (ctx) => {
      // @ts-ignore
      toast.error(ctx.response.data.details.reason);
    },
  });

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email.current === null || password.current === null) {
      toast.error("Provide an Email or Password");
      return;
    }

    if (email.current.value === "" || password.current.value === "") {
      toast.error("Provide an Email or Password");
      return;
    }

    const emailSchema = z.string().email();

    if (!emailSchema.safeParse(email.current.value).success) {
      toast.error("The Email you provided is invalid");
      return;
    }

    const emailData = email.current.value;
    const passwordData = password.current.value;

    mutate.mutate({
      email: emailData,
      password: passwordData,
    });
  };

  return (
    <header className="Splash">
      <div className="Left">
        <div className="Left__Inner">
          <h1>
            Growth Catalysts: Expert <span>Consultation</span>
          </h1>

          <form onSubmit={handleLogin}>
            <div>
              <label>Email</label>
              <input type="text" ref={email} />
            </div>

            <div>
              <label>Password</label>
              <div>
                <input
                  type={passwordShown ? "text" : "password"}
                  ref={password}
                />
                <FontAwesomeIcon
                  className="PasswordIcon"
                  onClick={() => {
                    setPasswordShown(!passwordShown);
                  }}
                  icon={!passwordShown ? faEye : faEyeSlash}
                />
              </div>
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

            <div className="JoinUs">
              Don't have an account?{" "}
              <Link className="Link" to="/signin">
                Join Us Now!
              </Link>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
}
