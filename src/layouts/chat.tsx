import Navbar from "../components/navbar/navbar";
import Chat from "../components/chat/chat";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ChatPage() {
  let navigate = useNavigate();

  useEffect(() => {
    document.title = "Chat | Free me";

    if (sessionStorage.getItem("token") === null) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <Navbar />
      <Chat />
    </>
  );
}
