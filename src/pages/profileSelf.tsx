import ProfileSelf from "../components/profile/newProfileSelf";

import { useEffect } from "react";

export default function ProfileSelfPage() {
  useEffect(() => {
    document.title = `Profile | FreeMe`;
  }, []);

  return <ProfileSelf />;
}
