import Navbar from "../components/navbar/navbar";
import LoginForm from "../components/login/loginForm";
import Switcher from "../components/switcher/switcher";
import AnimatedPage from "../components/animatedPage/animatedPage";

import { useEffect } from "react";

export default function LoginPage() {
  useEffect(() => {
    document.title = "Login | FreeMe";
  }, []);

  return (
    <AnimatedPage>
      <Navbar />
      <Switcher />
      <LoginForm />
    </AnimatedPage>
  );
}
