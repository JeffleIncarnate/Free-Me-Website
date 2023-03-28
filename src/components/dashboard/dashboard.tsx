import "./dashboard.css";

import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  let navigate = useNavigate();

  return (
    <>
      {(() => {
        let type = sessionStorage.getItem("type");

        if (type === "consultant") {
          return (
            <>
              <main className="FRE__Dashboard__Cons">
                <div className="FRE__Dashboard__Cons__Top">
                  <div className="FRE__Dashboard__Cons-opps"></div>
                  <div className="FRE__Dashboard__Cons-curr"></div>
                  <div className="FRE__Dashboard__Cons-col">
                    <div className="FRE__Dashboard__Cons-chats"></div>
                    <div className="FRE__Dashboard__Cons-bal"></div>
                  </div>
                </div>

                <div className="FRE__Dashboard__Cons__Bottom">
                  <div className="FRE__Dashboard__Cons-profile"></div>
                  <div className="FRE__Dashboard__Cons-notifs"></div>
                  <div className="FRE__Dashboard__Cons-network"></div>
                </div>
              </main>
            </>
          );
        } else if (type === "client") {
          return <h1>cli</h1>;
        } else if (type === "freerider") {
          return <h1>fre</h1>;
        } else {
          navigate("/");
        }
      })()}
    </>
  );
}
