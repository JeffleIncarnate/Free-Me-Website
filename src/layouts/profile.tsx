import Navbar from "../components/navbar/navbar";
import Profile from "../components/profile/profile";

import { useEffect } from "react";

export default function ProfilePage() {
  useEffect(() => {
    document.title = `Profile | Free Me`;
  }, []);

  return (
    <>
      <Navbar />
      <Profile />
    </>
  );
}
