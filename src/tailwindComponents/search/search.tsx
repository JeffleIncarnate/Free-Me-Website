import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import SearchClient from "./clientSearch";
import SearchConsultant from "./consultantSearch";

const Search = () => {
  const type = sessionStorage.getItem("type");
  const navigate = useNavigate();

  useEffect(() => {
    if (type === null) {
      navigate("/");
    }
  }, []);

  return <>{type === "client" ? <SearchConsultant /> : <SearchClient />}</>;
};

export default Search;
