import Navbar from "../components/navbar/navbar";
import Chat from "../components/chat/chat";
import Switcher from "../components/switcher/switcher";
import AnimatedPage from "../components/animatedPage/animatedPage";

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

  return (
    <AnimatedPage>
      <Navbar />
      <Switcher />
      <Chat />
    </AnimatedPage>
  );
}
