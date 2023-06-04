import "./sow.css";

import { useState } from "react";
import { ISOW } from "./sowInterface";

import SOWLeft from "./sowLeft/sowLeft";
import SOWCentre from "./sowCentre/sowCentre";
import SOWRight from "./sowRight/sowRight";

export default function SOW() {
  const [activeSow, setActiveSow] = useState<ISOW | null>(null);

  return (
    <main className="FRE__StatementOfWork">
      <SOWLeft setActiveSow={setActiveSow} />
      <SOWCentre activeSow={activeSow} />
      <SOWRight />
    </main>
  );
}
