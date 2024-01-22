import OAuth from "../components/oauth/oauth";
import AnimatedPage from "../components/animatedPage/animatedPage";

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
    <AnimatedPage>
      <OAuth />
    </AnimatedPage>
  );
}
