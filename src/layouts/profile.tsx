import Profile from "../components/profile/profile";
import AnimatedPage from "../components/animatedPage/animatedPage";

import { useEffect } from "react";

export default function ProfilePage() {
  useEffect(() => {
    document.title = `Profile | FreeMe`;
  }, []);

  return (
    <AnimatedPage>
      <Profile />
    </AnimatedPage>
  );
}
