import Search from "../tailwindComponents/search/search";
import AnimatedPage from "../components/animatedPage/animatedPage";

import { useEffect } from "react";

export default function SearchPage() {
  useEffect(() => {
    document.title = "Search | FreeMe";
  }, []);

  return (
    <AnimatedPage>
      <Search />
    </AnimatedPage>
  );
}
