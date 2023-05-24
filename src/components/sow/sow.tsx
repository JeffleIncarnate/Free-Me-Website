import "./sow.css";

import SOWLeft from "./sowLeft/sowLeft";
import SOWCentre from "./sowCentre/sowCentre";
import SOWRight from "./sowRight/sowRight";

export default function SOW() {
  return (
    <main className="FRE__StatementOfWork">
      <SOWLeft />
      <SOWCentre />
      <SOWRight />
    </main>
  );
}
