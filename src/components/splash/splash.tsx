import "./splash.scss";

import SplashLogo from "../../assets/splashLogo.svg";

import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Splash() {
  const [passwordShown, setPasswordShown] = useState<boolean>(false);

  const username = useRef(null);
  const password = useRef(null);

  return (
    <header className="Splash">
      <div className="Left">
        <div className="Left__Inner">
          <h1>
            Growth Catalysts: Expert <span>Consultation</span>
          </h1>

          <form
            onSubmit={() => {
              alert("e");
            }}
          >
            <div>
              <label>Email</label>
              <input type="text" />
            </div>

            <div>
              <label>Password</label>
              <div>
                <input type={passwordShown ? "text" : "password"} />
                <FontAwesomeIcon
                  className="PasswordIcon"
                  onClick={() => {
                    setPasswordShown(!passwordShown);
                  }}
                  icon={!passwordShown ? faEye : faEyeSlash}
                />
              </div>
            </div>

            <button type="submit">Sign In</button>
            <div>
              Don't have an account? <Link to="/signin">Join Us Now!</Link>
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
