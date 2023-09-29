import Navbar from "../components/navbar/navbar";
import HardwareAndSoftwareGrid from "../components/hardwareAndSoftwareGrid/hardwareAndSoftwareGrid";
import Switcher from "../components/switcher/switcher";

import { useEffect } from "react";

export default function HardwareAndSoftwarePage() {
  useEffect(() => {
    document.title = "Community Hardware | FreeMe";
  }, []);

  return (
    <>
      <Navbar />
      <Switcher />
      <HardwareAndSoftwareGrid />
    </>
  );
}
