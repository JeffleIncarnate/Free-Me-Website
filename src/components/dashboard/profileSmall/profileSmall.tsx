import "./profileSmall.css";

import { useEffect, useState } from "react";

// Normal
import Logo_Light from "../../../assets/Logo_Light.png";
import Logo_Light_Text from "../../../assets/Logo_Light-Text.png";

// E
import Logo_E from "../../../assets/e_picture.jpeg";
import Profile_E from "../../../assets/e_profile.jpg";

// Default
import ProfilePicture from "../../../assets/defaultPFP.png";
import Banner from "../../../assets/defaultBanner.jpg";

export default function ProfileSmall() {
  const [background, setBackground] = useState<any>(null);
  const [profileData, setProfileData] = useState<any>("Loading...");

  let getProfileData = () => {
    var requestOptions: any = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `http://localhost:3000/freeme/getUser?email=${sessionStorage.getItem(
        "email"
      )}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setProfileData(result.profile);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    setBackground(
      `${"data:image/jpeg;base64,"}${sessionStorage.getItem("banner")}`
    );

    getProfileData();
  });

  return (
    <>
      <main className="FRE__Profile__Small">
        <div
          className="FRE__Profile__Small__Images"
          style={{ backgroundImage: `url("${background}")` }}
        >
          {(() => {
            return (
              <img
                src={`${"data:image/jpeg;base64,"}${sessionStorage.getItem(
                  "profilePicture"
                )}`}
                alt=""
              />
            );
          })()}
        </div>
      </main>
    </>
  );
}
