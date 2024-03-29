import Chat from "../components/chat/chat";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ChatPage() {
  let navigate = useNavigate();

  useEffect(() => {
    document.title = "Chat | FreeMe";

    if (sessionStorage.getItem("token") === null) {
      navigate("/");
    }
  }, []);

  return <Chat />;
}
