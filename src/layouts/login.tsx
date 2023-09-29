import Navbar from "../components/navbar/navbar";
import LoginForm from "../components/login/loginForm";
import Switcher from "../components/switcher/switcher";

import { useEffect } from "react";

export default function LoginPage() {
  useEffect(() => {
    document.title = "Login | FreeMe";
  }, []);

  return (
    <>
      <Navbar />
      <Switcher />
      <LoginForm />
    </>
  );
}
