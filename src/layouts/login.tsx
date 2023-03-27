import Navbar from "../components/navbar/navbar";
import LoginForm from "../components/login/loginForm";

import { useEffect } from "react";

export default function LoginPage() {
  useEffect(() => {
    document.title = "Login | Free Me";
  }, []);

  return (
    <>
      <Navbar />
      <LoginForm />
    </>
  );
}
