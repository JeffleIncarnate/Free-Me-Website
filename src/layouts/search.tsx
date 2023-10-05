import Navbar from "../components/navbar/navbar";
import Switcher from "../components/switcher/switcher";
import Search from "../tailwindComponents/search/search";
import AnimatedPage from "../components/animatedPage/animatedPage";

import { useEffect } from "react";

export default function SearchPage() {
  useEffect(() => {
    document.title = "Search | FreeMe";
  }, []);

  return (
    <AnimatedPage>
      <Navbar />
      <Switcher />
      <Search />
    </AnimatedPage>
  );
}
