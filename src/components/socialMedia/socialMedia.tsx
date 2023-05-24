import "./socialMedia.css";

import SocialMediaLeft from "./socialLeft/socialLeft";
import SocialMediaCentre from "./socialCentre/socialCentre";
import SocialMediaRight from "./socialRight/socialRight";

export default function SocialMedia() {
  return (
    <main className="FRE__Social">
      <SocialMediaLeft />
      <SocialMediaCentre />
      <SocialMediaRight />
    </main>
  );
}
