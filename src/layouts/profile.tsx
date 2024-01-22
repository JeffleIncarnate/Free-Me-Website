import Profile from "../components/profile/profile";

import { useEffect } from "react";

export default function ProfilePage() {
  useEffect(() => {
    document.title = `Profile | FreeMe`;
  }, []);

  return <Profile />;
}
