import { useEffect } from "react";

// import SocialMedia from "../components/socialMedia/socialMedia";
import SocialMedia from "../tailwindComponents/socialMedia/socialMedia";
import AnimatedPage from "../components/animatedPage/animatedPage";

export default function SocialMediaPage() {
  useEffect(() => {
    document.title = "Social Media | FreeMe";
  });

  return (
    <AnimatedPage>
      <SocialMedia />
    </AnimatedPage>
  );
}
