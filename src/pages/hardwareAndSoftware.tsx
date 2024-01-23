import HardwareAndSoftwareGrid from "../components/hardwareAndSoftwareGrid/hardwareAndSoftwareGrid";

import { useEffect } from "react";

export default function HardwareAndSoftwarePage() {
  useEffect(() => {
    document.title = "Community Hardware | FreeMe";
  }, []);

  return <HardwareAndSoftwareGrid />;
}
