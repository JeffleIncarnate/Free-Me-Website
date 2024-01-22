import Search from "../tailwindComponents/search/search";

import { useEffect } from "react";

export default function SearchPage() {
  useEffect(() => {
    document.title = "Search | FreeMe";
  }, []);

  return <Search />;
}
