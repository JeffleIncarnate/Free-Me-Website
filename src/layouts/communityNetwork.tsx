import CommunityNetwork from "../components/communityNetwork/communityNetwork";
import AnimatedPage from "../components/animatedPage/animatedPage";

import { useEffect } from "react";

export default function CommunityNetworkPage() {
  useEffect(() => {
    document.title = "Community Network | FreeMe";
  }, []);

  return (
    <AnimatedPage>
      <CommunityNetwork />
    </AnimatedPage>
  );
}
