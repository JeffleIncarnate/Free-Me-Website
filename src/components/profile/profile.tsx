import "./profile.css";

import { useEffect, useState } from "react";

import Logo_Light from "../../assets/Logo_Light.png";
import Logo_Light_Text from "../../assets/Logo_Light-Text.png";

export default function Profile() {
  const [background, setBackground]: any = useState();

  useEffect(() => {
    if (
      sessionStorage.getItem("uuid") === "4a10c437-a70f-4f06-823d-8c17fe2384db"
    ) {
      setBackground(`../../..${Logo_Light_Text}`);
    }
  });

  return (
    <>
      <main className="FRE__Profile">
        <div
          className="FRE__Profile__Images"
          style={{ backgroundImage: `url("${background}")` }}
        >
          {(() => {
            if (
              sessionStorage.getItem("uuid") ===
              "4a10c437-a70f-4f06-823d-8c17fe2384db"
            ) {
              return <img src={Logo_Light} alt="" />;
            }
          })()}

          <div>
            <button>Add Background</button>
            <button>Upload Photo</button>
          </div>
        </div>

        <div className="FRE__Profile__Grid">
          <div className="FRE__Profile__Grid-Values">
            <h2>Values</h2>

            <ul>
              <li>Loyalty</li>
              <li>Spirituality</li>
              <li>Humility</li>
              <li>Compassion</li>
              <li>Honesty</li>
              <li>Kindness</li>
              <li>Integrity</li>
              <li>Selflessness</li>
            </ul>
          </div>
          <div className="FRE__Profile__Grid-Hobbies">
            <h2>Hobbies</h2>

            <ul>
              <li>Painting</li>
              <li>Dance</li>
              <li>Chess</li>
              <li>Gardening</li>
              <li>Writing</li>
            </ul>
          </div>
          <div className="FRE__Profile__Grid-Skills">
            <h2>Skills</h2>

            <ul>
              <li>Computer proficiency</li>
              <li>Leadership experience</li>
              <li>Communication skills</li>
              <li>People skills</li>
            </ul>
          </div>
          <div className="FRE__Profile__Grid-Education">
            <h2>Education</h2>

            <ul>
              <li>
                <strong>Harvard University</strong> -- 2018-Current
              </li>
              <li>
                <strong>MIT</strong> -- 2016-2018
              </li>
            </ul>
          </div>
          <div className="FRE__Profile__Grid-CV_Highlights">
            <h2>CV Highlights</h2>
          </div>
          <div className="FRE__Profile__Grid-Ambtions">
            <h2>Ambtions</h2>

            <ul>
              <li>Aqcuisitions and Mergers</li>
              <li>Business Continuity Management</li>
            </ul>
          </div>
          <div className="FRE__Profile__Grid-Awards">
            <h2>Awards</h2>

            <ul>
              <li>2022 MBA Emerging leader award</li>
              <li>Represented Holland in Rugby</li>
            </ul>
          </div>

          <div className="FRE__Profile__Grid-Timeline">
            <h2>Timeline</h2>

            <div className="FRE__Profile__Grid-Timeline__Time"></div>
          </div>
        </div>
      </main>
    </>
  );
}
