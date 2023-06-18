import "./communityNetwork.css";

import { useNavigate } from "react-router-dom";

// // Hardware Software
// import PbTech from "../../assets/communityNetwork/pbTech.png";
// import MicrosoftStore from "../../assets/communityNetwork/microsoftStore.png";
// import InGram from "../../assets/communityNetwork/ingram.png";

// // Utilitys
// import Mercury from "../../assets/communityNetwork/mercury.png";
// import Spark from "../../assets/communityNetwork/spark.png";

// // Insurance
// import Crombie from "../../assets/communityNetwork/crombie.png";
// import AA from "../../assets/communityNetwork/aa.png";

// // Accomodation
// import Quest from "../../assets/communityNetwork/quest.png";
// import HotelH from "../../assets/communityNetwork/hotelH.png";

// // Energy
// import Z from "../../assets/communityNetwork/z.png";
// import Canstar from "../../assets/communityNetwork/canstar.png";

// // Banking
// import ANZ from "../../assets/communityNetwork/anz.png";
// import OtherBank from "../../assets/communityNetwork/otherBank.png";

// // Education
// import Waikato from "../../assets/communityNetwork/waikato.png";
// import TePukenga from "../../assets/communityNetwork/tePukenga.png";

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
        <img src={Computer} alt="" />
        <img src={Save} alt="" />

        <div>
          <h2>Hardware and Software</h2>
        </div>
      </div>
      <div className="FRE__CommunityNetwork-utility">
        <img src={Phone} alt="" />
        <img src={Tap} alt="" />
        <img src={Light} alt="" />

        <div>
          <h2>Utilitys</h2>
        </div>
      </div>
      <div className="FRE__CommunityNetwork-insurance">
        <img src={Umbrella} alt="" />

        <div>
          <h2>Insurance</h2>
        </div>
      </div>
      <div className="FRE__CommunityNetwork-balances">
        <div>
          <h2>Balances and Activity</h2>
        </div>
      </div>

      <div className="FRE__CommunityNetwork-accomodation">
        <img src={Hotel} alt="" />

        <div>
          <h2>Accomodation</h2>
        </div>
      </div>

      <div className="FRE__CommunityNetwork-energy">
        <img src={Fuel} alt="" />
        <img src={LPG} alt="" />

        <div>
          <h2>Energy</h2>
        </div>
      </div>

      <div className="FRE__CommunityNetwork-banking">
        <img src={Bank} alt="" />

        <div>
          <h2>Banking</h2>
        </div>
      </div>
      <div className="FRE__CommunityNetwork-education">
        <img src={Hat} alt="" />

        <div>
          <h2>Education</h2>
        </div>
      </div>
    </main>
  );
}
