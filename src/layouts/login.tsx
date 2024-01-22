import LoginForm from "../components/login/loginForm";
import AnimatedPage from "../components/animatedPage/animatedPage";

import { useEffect } from "react";

export default function LoginPage() {
  useEffect(() => {
    document.title = "Login | FreeMe";
  }, []);

  return (
    <AnimatedPage>
      <LoginForm />
    </AnimatedPage>
  );
}
