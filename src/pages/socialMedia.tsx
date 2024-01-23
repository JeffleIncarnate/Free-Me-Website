import { useEffect } from "react";

// import SocialMedia from "../components/socialMedia/socialMedia";
import SocialMedia from "../tailwindComponents/socialMedia/socialMedia";

export default function SocialMediaPage() {
  useEffect(() => {
    document.title = "Social Media | FreeMe";
  });

  return <SocialMedia />;
}
