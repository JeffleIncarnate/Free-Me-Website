import { useAppSelector } from "../core/state/hooks";
import { selectLoggedIn } from "../core/state/reducers/authSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ProtectedRoute = ({ children }: React.PropsWithChildren) => {
  const loggedIn: boolean = useAppSelector(selectLoggedIn);
  const nav = useNavigate();

  useEffect(() => {
    if (!loggedIn) {
      nav("/");
    }
  }, []);

  return children;
};

export default ProtectedRoute;
