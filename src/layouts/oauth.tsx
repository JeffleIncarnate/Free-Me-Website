import Navbar from "../components/navbar/navbar";
import OAuth from "../components/oauth/oauth";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function OauthPage() {
  let navigate = useNavigate();

  useEffect(() => {
    document.title = "OAuth | Free Me";

    if (sessionStorage.getItem("token") === null) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <Navbar />
      <OAuth />
    </>
  );
}
