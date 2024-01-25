import { ReactNode, useEffect } from "react";
import { store } from "../core/state/store";
import { useNavigate } from "react-router-dom";

export default function ProtectedPage({ children }: { children: ReactNode }) {
  const isLoggedin = store.getState().auth.loggedIn;
  const nav = useNavigate();

  useEffect(() => {
    if (!isLoggedin) {
      nav("/");
      return;
    }
  }, []);

  return children;
}
