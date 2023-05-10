import "./communityNetwork.css";

import { useNavigate } from "react-router-dom";

export default function CommunityNetwork() {
  let navigate = useNavigate();

  let handleHardwareSoftwareClick = () => {
    navigate("/communityNetwork/hardware");
  };

  return (
    <main className="FRE__CommunityNetwork">
      <div
        className="FRE__CommunityNetwork-hard_software"
        onClick={() => {
          handleHardwareSoftwareClick();
        }}
      >
        <h2>Hardware and Software</h2>
      </div>
      <div className="FRE__CommunityNetwork-utility">
        <h2>Utilitys</h2>
      </div>
      <div className="FRE__CommunityNetwork-insurance">
        <h2>Insurance</h2>
      </div>
      <div className="FRE__CommunityNetwork-balances">
        <h2>Balances and Activity</h2>
      </div>

      <div className="FRE__CommunityNetwork-accomodation">
        <h2>Accomodation</h2>
      </div>
      <div className="FRE__CommunityNetwork-energy">
        <h2>Energy</h2>
      </div>

      <div className="FRE__CommunityNetwork-banking">
        <h2>Banking</h2>
      </div>
      <div className="FRE__CommunityNetwork-education">
        <h2>Education</h2>
      </div>
    </main>
  );
}
