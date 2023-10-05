import Navbar from "../components/navbar/navbar";
import SOW from "../components/sow/sow";
import Switcher from "../components/switcher/switcher";
import AnimatedPage from "../components/animatedPage/animatedPage";

import { useEffect } from "react";

export default function StatementOfWorkPage() {
  useEffect(() => {
    document.title = "Statement of Work | FreeMe";
  }, []);

  return (
    <AnimatedPage>
      <Navbar />
      <Switcher />
      <SOW />
    </AnimatedPage>
  );
}
