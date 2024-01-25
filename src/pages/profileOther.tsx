import ProfileOther from "../components/profile/newProfileOther";

import { useEffect } from "react";

export default function ProfileOtherPage() {
  useEffect(() => {
    document.title = `Profile | FreeMe`;
  }, []);

  return <ProfileOther />;
}
