import Navbar from "../components/navbar/navbar";
import CommunityNetwork from "../components/communityNetwork/communityNetwork";
import Switcher from "../components/switcher/switcher";
import AnimatedPage from "../components/animatedPage/animatedPage";

import { useEffect } from "react";

export default function CommunityNetworkPage() {
  useEffect(() => {
    document.title = "Community Network | FreeMe";
  }, []);

  return (
    <AnimatedPage>
      <Navbar />
      <Switcher />
      <CommunityNetwork />
    </AnimatedPage>
  );
}
