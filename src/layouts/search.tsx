import Navbar from "../components/navbar/navbar";
import Switcher from "../components/switcher/switcher";
import Search from "../tailwindComponents/search/search";

import { useEffect } from "react";

export default function SearchPage() {
  useEffect(() => {
    document.title = "Search | FreeMe";
  }, []);

  return (
    <>
      <Navbar />
      <Switcher />
      <Search />
    </>
  );
}
