import CommunityNetwork from "../components/communityNetwork/communityNetwork";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CommunityNetworkPage() {
  useEffect(() => {
    document.title = "Community Network | FreeMe";
  }, []);

  return <CommunityNetwork />;
}
