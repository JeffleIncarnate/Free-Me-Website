import "./communityNetwork.css";

import { useNavigate } from "react-router-dom";

// Hardware Software
import PbTech from "../../assets/communityNetwork/pbTech.png";
import MicrosoftStore from "../../assets/communityNetwork/microsoftStore.png";
import InGram from "../../assets/communityNetwork/ingram.png";

// Utilitys
import Mercury from "../../assets/communityNetwork/mercury.png";
import Spark from "../../assets/communityNetwork/spark.png";

// Insurance
import Crombie from "../../assets/communityNetwork/crombie.png";
import AA from "../../assets/communityNetwork/aa.png";

// Accomodation
import Quest from "../../assets/communityNetwork/quest.png";
import HotelH from "../../assets/communityNetwork/hotelH.png";

// Energy
import Z from "../../assets/communityNetwork/z.png";
import Canstar from "../../assets/communityNetwork/canstar.png";

// Banking
import ANZ from "../../assets/communityNetwork/anz.png";
import OtherBank from "../../assets/communityNetwork/otherBank.png";

// Education
import Waikato from "../../assets/communityNetwork/waikato.png";
import TePukenga from "../../assets/communityNetwork/tePukenga.png";

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
        <img src={PbTech} alt="" />
        <img src={MicrosoftStore} alt="" />
        <img src={InGram} alt="" />

        <div>
          <h2>Hardware and Software</h2>
        </div>
      </div>
      <div className="FRE__CommunityNetwork-utility">
        <img src={Mercury} alt="" />
        <img src={Spark} alt="" />

        <div>
          <h2>Utilitys</h2>
        </div>
      </div>
      <div className="FRE__CommunityNetwork-insurance">
        <img src={Crombie} alt="" />
        <img src={AA} alt="" />

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
        <img src={Quest} alt="" />
        <img src={HotelH} alt="" />

        <div>
          <h2>Accomodation</h2>
        </div>
      </div>

      <div className="FRE__CommunityNetwork-energy">
        <img src={Z} alt="" />
        <img src={Canstar} alt="" />

        <div>
          <h2>Energy</h2>
        </div>
      </div>

      <div className="FRE__CommunityNetwork-banking">
        <img src={ANZ} alt="" />
        <img src={OtherBank} alt="" />

        <div>
          <h2>Banking</h2>
        </div>
      </div>
      <div className="FRE__CommunityNetwork-education">
        <img src={Waikato} alt="" />
        <img src={TePukenga} alt="" />

        <div>
          <h2>Education</h2>
        </div>
      </div>
    </main>
  );
}
