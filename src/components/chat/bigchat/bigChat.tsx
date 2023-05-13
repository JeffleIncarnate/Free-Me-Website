import "./bigChat.css";

import { io } from "socket.io-client";
import { useRef, useState } from "react";
import { IBigChat } from "../chatInterface";

export default function BigChat({ isActive, data }: IBigChat) {
  const socket = io("ws://localhost:3001");
  const message = useRef(null);

  const [recieved, setRecieved] = useState();
  const [check, setCheck] = useState(false);

  socket.on("chat-message", (message) => {
    setRecieved(message);
    setCheck(true);
  });

  socket.emit("join", sessionStorage.getItem("email"));

  return (
    <div className="FRE__Chat__Big">
      {isActive === true ? (
        <>
          <div className="FRE__Chat__Big-Top">
            <div className="FRE__Chat__Big-Top__Image_Cricle">
              <img src={data.profilePicture} alt="" />
            </div>

            <h2>{data.username}</h2>

            <div>
              <i className="fa-solid fa-phone"></i>
              <i className="fa-solid fa-video"></i>
              <i className="fa-solid fa-circle-info"></i>
            </div>
          </div>
          <div className="FRE__Chat__Big-Middle" id="FRE__Chat__Big-Middle__Id">
            {check ? (
              <>
                {(() => {
                  let messageContainer = document.getElementById(
                    "FRE__Chat__Big-Middle__Id"
                  );

                  const newDiv = document.createElement("div");

                  newDiv.classList.add("FRE__Chat__Big-Message");

                  (newDiv as any).innerHTML = recieved;

                  (messageContainer as any).append(newDiv);
                  setCheck(false);
                  return null;
                })()}
              </>
            ) : null}
          </div>
          <div className="FRE__Chat__Big-Bottom">
            <div className="FRE__Chat__Big-Bottom__Icons">
              <i className="fa-solid fa-circle-plus"></i>
              <i className="fa-solid fa-photo-film"></i>
            </div>

            <div className="FRE__Chat__Big-Bottom__Message">
              <input type="text" placeholder="Aa" ref={message} />
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="#faf9f6"
              onClick={() => {
                socket.emit("send-message", (message.current! as any).value);
              }}
            >
              <path d="M49.9 27.8C15.1 12.7-19.2 50.1-1.2 83.5L68.1 212.2c4.4 8.3 12.6 13.8 21.9 15c0 0 0 0 0 0l176 22c3.4 .4 6 3.3 6 6.7s-2.6 6.3-6 6.7l-176 22s0 0 0 0c-9.3 1.2-17.5 6.8-21.9 15L-1.2 428.5c-18 33.4 16.3 70.8 51.1 55.7L491.8 292.7c32.1-13.9 32.1-59.5 0-73.4L49.9 27.8z" />
            </svg>
          </div>
        </>
      ) : (
        <h2>Select a Chat</h2>
      )}
    </div>
  );
}
