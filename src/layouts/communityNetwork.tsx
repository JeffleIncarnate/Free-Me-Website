import Navbar from "../components/navbar/navbar";
import CommunityNetwork from "../components/communityNetwork/communityNetwork";

import { useEffect } from "react";

export default function CommunityNetworkPage() {
  useEffect(() => {
    document.title = "Community Network | FreeMe";
  }, []);

  return (
    <>
      <Navbar />
      <CommunityNetwork />
    </>
  );
}
