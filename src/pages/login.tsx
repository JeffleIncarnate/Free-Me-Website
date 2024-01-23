import LoginForm from "../components/login/loginForm";

import { useEffect } from "react";

export default function LoginPage() {
  useEffect(() => {
    document.title = "Login | FreeMe";
  }, []);

  return <LoginForm />;
}
