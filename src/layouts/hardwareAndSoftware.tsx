import Navbar from "../components/navbar/navbar";
import HardwareAndSoftware from "../components/hardwareAndSoftware/hardwareAndSoftware";

import { useEffect } from "react";

export default function HardwareAndSoftwarePage() {
  useEffect(() => {
    document.title = "Community Hardware | FreeMe";
  }, []);

  return (
    <>
      <Navbar />
      <HardwareAndSoftware />
    </>
  );
}
