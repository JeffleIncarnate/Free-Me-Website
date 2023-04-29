import "./chat.css";

import SmallChat from "./smallchat/smallChat";
import BigChat from "./bigchat/bigChat";
import ProfileChat from "./profileChat/profileChat";

import { useState, useEffect } from "react";
import { io } from "socket.io-client";

interface IActiveChat {
  img: string | null;
  userName: string | null;
}

export default function Chat() {
  // Active chip class: FRE__Chat__Left-Chips__Active
  // NotActive chip class: FRE__Chat__Left-Chips__Not_Active
  const [activeChip, setActiveChip] = useState<boolean[]>([true, false]);
  const [activeChat, setActiveChat] = useState<IActiveChat>({
    img: null,
    userName: null,
  });

  return (
    <main className="FRE__Chat">
      <div className="FRE__Chat__Left">
        <div className="FRE__Chat__Left-Top">
          <h2>Chats</h2>

          <div>
            <i className="fa-solid fa-ellipsis"></i>
            <i className="fa-solid fa-video"></i>
            <i className="fa-solid fa-pen-to-square"></i>
          </div>
        </div>
        <div className="FRE__Chat__Left-Search">
          <input type="text" placeholder="Search FreeMe Chat" />
        </div>
        <div className="FRE__Chat__Left-Chips">
          <div
            className={
              activeChip[0]
                ? "FRE__Chat__Left-Chips__Active"
                : "FRE__Chat__Left-Chips__Not_Active"
            }
            onClick={() => {
              if (!activeChip[0]) {
                setActiveChip([true, false]);
              }
            }}
          >
            <p>Inbox</p>
          </div>

          <div
            className={
              activeChip[1]
                ? "FRE__Chat__Left-Chips__Active"
                : "FRE__Chat__Left-Chips__Not_Active"
            }
            onClick={() => {
              if (!activeChip[1]) {
                setActiveChip([false, true]);
              }
            }}
          >
            <p>Communities</p>
          </div>
        </div>
        <div className="FRE__Chat__Left-Chats">
          <SmallChat
            img={
              "https://www.giantfreakinrobot.com/wp-content/uploads/2022/08/rick-astley-900x506.jpg"
            }
            userName="Rick Astley"
            receiving="true"
            lastMessage="Don't you just love Never gonna give you up?"
            setActiveChat={setActiveChat}
          />

          <SmallChat
            img={
              "https://images.unsplash.com/photo-1495602787267-96ab76127c2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            }
            userName="Ferd Swinkels"
            receiving="false"
            lastMessage="Did you see the Statement of Work?"
            setActiveChat={setActiveChat}
          />
        </div>
      </div>
      <BigChat
        isActive={activeChat.img === null ? "false" : "true"}
        data={activeChat}
      />
      <ProfileChat
        isActive={activeChat.img === null ? "false" : "true"}
        data={activeChat}
      />
    </main>
  );
}
