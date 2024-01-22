import Splash from "../components/splash/splash";
import AnimatedPage from "../components/animatedPage/animatedPage";

import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    document.title = "Home | FreeMe";
  }, []);

  return (
    <AnimatedPage>
      <Splash />
    </AnimatedPage>
  );
}
