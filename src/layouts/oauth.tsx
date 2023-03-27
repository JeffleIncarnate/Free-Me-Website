import Navbar from "../components/navbar/navbar";
import OAuth from "../components/oauth/oauth";

import { useEffect } from "react";

export default function OauthPage() {
  useEffect(() => {
    document.title = "OAuth | Free Me";
  }, []);

  return (
    <>
      <Navbar />
      <OAuth />
    </>
  );
}
