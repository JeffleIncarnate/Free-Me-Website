import Navbar from "../components/navbar/navbar";
import Profile from "../components/profile/profile";
import Switcher from "../components/switcher/switcher";

import { useEffect } from "react";

export default function ProfilePage() {
  useEffect(() => {
    document.title = `Profile | FreeMe`;
  }, []);

  return (
    <>
      <Navbar />
      <Switcher />
      <Profile />
    </>
  );
}
