import Balances from "../components/balances/balances";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function BalancesPages() {
  let navigate = useNavigate();

  useEffect(() => {
    document.title = "Balances | FreeMe";

    if (sessionStorage.getItem("token") === null) {
      navigate("/");
    }
  }, []);

  return <Balances />;
}
