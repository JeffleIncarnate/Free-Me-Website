import Splash from "../components/splash/splash";

import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    document.title = "Home | Free Me";
  }, []);

  return <Splash />;
}
