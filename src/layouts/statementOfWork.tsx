import SOW from "../components/sow/sow";
import AnimatedPage from "../components/animatedPage/animatedPage";

import { useEffect } from "react";

export default function StatementOfWorkPage() {
  useEffect(() => {
    document.title = "Statement of Work | FreeMe";
  }, []);

  return (
    <AnimatedPage>
      <SOW />
    </AnimatedPage>
  );
}
