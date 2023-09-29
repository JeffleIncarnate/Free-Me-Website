import Navbar from "../components/navbar/navbar";
import OAuth from "../components/oauth/oauth";
import Switcher from "../components/switcher/switcher";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function OauthPage() {
  let navigate = useNavigate();

  useEffect(() => {
    document.title = "OAuth | FreeMe";

    if (sessionStorage.getItem("token") === null) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <Navbar />
      <Switcher />
      <OAuth />
    </>
  );
}
