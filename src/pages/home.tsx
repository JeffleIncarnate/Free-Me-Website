import { useEffect } from "react";

import Splash from "../components/splash/splash";

export default function HomePage() {
  useEffect(() => {
    document.title = "Home | FreeMe";
  }, []);

  return (
    <>
      <Splash />
    </>
  );
}
