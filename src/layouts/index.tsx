import Splash from "../components/splash/splash";
import Switcher from "../components/switcher/switcher";
import AnimatedPage from "../components/animatedPage/animatedPage";

import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    document.title = "Home | FreeMe";
  }, []);

  return (
    <AnimatedPage>
      <Splash />
      <Switcher />
    </AnimatedPage>
  );
}
