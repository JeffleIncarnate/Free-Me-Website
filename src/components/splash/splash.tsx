import "./splash.scss";

import SplashLogo from "../../assets/splashLogo.svg";

import axios from "axios";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

type QueryVariables = {
  email: string;
  password: string;
};

export default function Splash() {
  const [passwordShown, setPasswordShown] = useState<boolean>(false);

  const email = useRef<HTMLInputElement | null>(null);
  const password = useRef<HTMLInputElement | null>(null);

  const mutate = useMutation({
    mutationFn: ({ email, password }: QueryVariables) => {
      return axios.post("http://localhost:3000/v1/api/auth/login", {
        email: email,
        password: password,
      });
    },
    onSuccess: (ctx) => {
      console.log(ctx.data);
      // do redux shit now probably
      toast.success("e");
    },
    onError: (ctx) => {
      toast.error(ctx.message);
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
            <div>
              Don't have an account?{" "}
              <Link className="Link" to="/signin">
                Join Us Now!
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div className="Right">
        <img src={SplashLogo} alt="" />
      </div>
    </header>
  );
}
