import "./splash.css";
import { useNavigate } from "react-router-dom";

export default function Splash() {
  let navigate = useNavigate();

  return (
    <>
      <header>
        <div className="FRE__Splash">
          <h1>FreeMe</h1>
          <div className="FRE__Splash__Signup__Wrapper">
            <div className="FRE__Splash__SignUp">
              <h2>Consultant</h2>
              <p>Have Skills?</p>
              <button
                onClick={() => {
                  navigate("/signupConsultant");
                }}
              >
                Join Us!
              </button>
            </div>

            <div className="FRE__Splash__SignUp">
              <h2>Client</h2>
              <p>Need skills?</p>
              <button
                onClick={() => {
                  navigate("/signupClient");
                }}
              >
                Join Us!
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
