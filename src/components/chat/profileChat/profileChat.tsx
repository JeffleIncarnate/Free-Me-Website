import "./profileChat.css";

import { useState } from "react";

import { IProfileData } from "../chatInterface";

export default function ProfileChat({ data }: { [key: string]: IProfileData }) {
  return (
    <>
      {data.username !== "" ? (
        <>
          <div className="FRE__Chat__Right">
            {data.username === "Rick Astley" ? (
              <ProfileChatDisplay
                name={data.username}
                profilePicture={data.profilePicture}
              />
            ) : data.username === "Ferd Swinkels" ? (
              <ProfileChatDisplay
                name={data.username}
                profilePicture={data.profilePicture}
              />
            ) : null}
          </div>
        </>
      ) : null}
    </>
  );
}

function ProfileChatDisplay({
  name,
  profilePicture,
}: {
  [key: string]: string;
}) {
  return (
    <div className="FRE__Chat__Right__Profile">
      <ProfileChatDisplayPfpName name={name} profilePicture={profilePicture} />

      <ProfileChatDisplayButtons />

      <ProfileChatDisplayDropdown dropDownName="Chat Info" />
      <ProfileChatDisplayDropdown dropDownName="Customize Chat" />
      <ProfileChatDisplayDropdown dropDownName="Media, files, and links" />
      <ProfileChatDisplayDropdown dropDownName="Privacy & Support" />
    </div>
  );
}

function ProfileChatDisplayPfpName({
  name,
  profilePicture,
}: {
  [key: string]: string;
}) {
  return (
    <div className="FRE__Chat__Right__Profile__ImgName">
      <div className="FRE__Chat__Small-Image_Circle">
        <img src={profilePicture} alt="" />
      </div>

      <h3>{name}</h3>
    </div>
  );
}

function ProfileChatDisplayButtons() {
  const [bellMute, setBellMute] = useState<boolean>(false);

  let handleBellClick = () => {
    setBellMute(bellMute ? false : true);
  };

  return (
    <div className="FRE__Chat__Right__Profile__Buttons">
      <section>
        <button>
          <i className="fa-solid fa-user"></i>
        </button>
        <p>Profile</p>
      </section>
      <section>
        <button
          onClick={() => {
            handleBellClick();
          }}
        >
          {bellMute ? (
            <i className="fa-solid fa-bell-slash"></i>
          ) : (
            <i className="fa-solid fa-bell"></i>
          )}
        </button>
        <p>Mute</p>
      </section>
      <section>
        <button>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        <p>Search</p>
      </section>
    </div>
  );
}

function ProfileChatDisplayDropdown({
  dropDownName,
}: {
  [key: string]: string;
}) {
  const [displayDropdown, setDisplayDropdown] = useState<boolean>(false);

  let handleClick = () => {
    setDisplayDropdown(displayDropdown ? false : true);
  };

  return (
    <div
      className="FRE__Chat__Right__Dropdown"
      onClick={() => {
        handleClick();
      }}
    >
      <div className="FRE__Chat__Right__Dropdown__Top">
        <p>{dropDownName}</p>

        {displayDropdown ? (
          <i className="fa-solid fa-angle-up"></i>
        ) : (
          <i className="fa-solid fa-angle-down"></i>
        )}
      </div>
    </div>
  );
}
