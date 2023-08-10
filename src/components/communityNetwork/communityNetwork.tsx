import "./communityNetwork.css";

import { useNavigate } from "react-router-dom";

// Hardware and Software
import Computer from "../../assets/communityNetwork/newLogos/computer.png";
import Save from "../../assets/communityNetwork/newLogos/save.png";

// Utilitys
import Tap from "../../assets/communityNetwork/newLogos/tap.png";
import Phone from "../../assets/communityNetwork/newLogos/phone.png";
import Light from "../../assets/communityNetwork/newLogos/light.png";

// Insurance
import Umbrella from "../../assets/communityNetwork/newLogos/umbrella.png";

// Accomodation
import Hotel from "../../assets/communityNetwork/newLogos/hotel.png";

// Energy
import Fuel from "../../assets/communityNetwork/newLogos/fuwl.png";
import LPG from "../../assets/communityNetwork/newLogos/lpg.png";

// Banking
import Bank from "../../assets/communityNetwork/newLogos/bank.png";

// Education
import Hat from "../../assets/communityNetwork/newLogos/education.png";

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
        <i className="fa-solid fa-computer"></i>

        <h2>Hardware and Software</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
          recusandae.
        </p>
      </div>
      <div className="FRE__CommunityNetwork-utility">
        <i className="fa-solid fa-phone"></i>

        <h2>Utilitys</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
          recusandae.
        </p>
      </div>
      <div className="FRE__CommunityNetwork-insurance">
        <i className="fa-solid fa-umbrella"></i>

        <h2>Insurance</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
          recusandae.
        </p>
      </div>
      <div className="FRE__CommunityNetwork-balances">
        <div>
          <h2>Balances and Activity</h2>
        </div>
      </div>

      <div className="FRE__CommunityNetwork-accomodation">
        <i className="fa-solid fa-hotel"></i>

        <h2>Accommodation</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>

      <div className="FRE__CommunityNetwork-energy">
        <i className="fa-solid fa-gas-pump"></i>

        <h2>Energy</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      </div>

      <div className="FRE__CommunityNetwork-banking">
        <i className="fa-solid fa-umbrella"></i>

        <h2>Insurance</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
          recusandae.
        </p>
      </div>
      <div className="FRE__CommunityNetwork-education">
        <i className="fa-solid fa-graduation-cap"></i>

        <h2>Education</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
          recusandae.
        </p>
      </div>
    </main>
  );
}
