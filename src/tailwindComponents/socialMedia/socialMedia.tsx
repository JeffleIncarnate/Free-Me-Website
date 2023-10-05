import React from "react";

import SocialLeft from "./left";
import SocialRight from "./right";
import SocialCentre from "./centre";

const SocialMedia = () => {
  return (
    <main className="w-full p-4 flex item-center justify-center gap-4 mt-[15vh] h-[85vh]">
      <SocialLeft />
      <SocialCentre />
      <SocialRight />
    </main>
  );
};

export default SocialMedia;
