import "./smallChat.css";

import { ISmallChat } from "../chatInterface";

export default function SmallChat({
  profilePicture,
  username,
  receiving,
  lastMessage,
  muted,
  setActiveChat,
}: ISmallChat) {
  return (
    <div
      className="FRE__Chat__Small"
      onClick={() => {
        setActiveChat({
          username: username,
          profilePicture: profilePicture,
          muted: muted,
        });
      }}
    >
      <div className="FRE__Chat__Small-Image_Circle">
        <img src={profilePicture} alt="" />
      </div>

      <div>
        <h3>{username}</h3>
        <p>{receiving ? `Received: ${lastMessage}` : `Sent: ${lastMessage}`}</p>
      </div>
    </div>
  );
}
