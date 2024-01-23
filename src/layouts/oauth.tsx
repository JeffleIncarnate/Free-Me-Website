import OAuth from "../components/oauth/oauth";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function OauthPage() {
  let navigate = useNavigate();

  useEffect(() => {
    document.title = "OAuth | FreeMe";
  }, []);

  return <OAuth />;
}
