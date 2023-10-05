import { useEffect } from "react";

import Navbar from "../components/navbar/navbar";
// import SocialMedia from "../components/socialMedia/socialMedia";
import SocialMedia from "../tailwindComponents/socialMedia/socialMedia";
import Switcher from "../components/switcher/switcher";
import AnimatedPage from "../components/animatedPage/animatedPage";

export default function SocialMediaPage() {
  useEffect(() => {
    document.title = "Social Media | FreeMe";
  });

  return (
    <AnimatedPage>
      <Navbar />
      <Switcher />
      <SocialMedia />
    </AnimatedPage>
  );
}
