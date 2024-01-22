import HardwareAndSoftwareGrid from "../components/hardwareAndSoftwareGrid/hardwareAndSoftwareGrid";
import AnimatedPage from "../components/animatedPage/animatedPage";

import { useEffect } from "react";

export default function HardwareAndSoftwarePage() {
  useEffect(() => {
    document.title = "Community Hardware | FreeMe";
  }, []);

  return (
    <AnimatedPage>
      <HardwareAndSoftwareGrid />
    </AnimatedPage>
  );
}
