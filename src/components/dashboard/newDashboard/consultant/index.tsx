import "./index.scss";

import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const nav = useNavigate();

  return (
    <main className="Dashboard__Consultant">
      <div className="SocialMedia">Social Media</div>
      <div className="CurrentJobs">Current Jobs</div>
      <div
        className="Profile"
        onClick={() => {
          nav("/profile");
        }}
      >
        Profile
      </div>
      <div className="CompanySearch">Company Search</div>
      <div className="Chat">Chat</div>
      <div className="Balances">Balances</div>
      <div className="CorporateNetwork">Corporate Network</div>
      <div className="Friends">Friends</div>
      <div className="Calender"></div>
    </main>
  );
}
