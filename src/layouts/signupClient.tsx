import Navbar from "../components/navbar/navbar";
import SignupClientForm from "../components/signupClientForm/signupClientForm";
import Switcher from "../components/switcher/switcher";
import AnimatedPage from "../components/animatedPage/animatedPage";

import { useEffect } from "react";

export default function SignupClientPage() {
  useEffect(() => {
    document.title = "Sign Up Client | FreeMe";
  }, []);

  return (
    <AnimatedPage>
      <Navbar />
      <Switcher />
      <SignupClientForm />
    </AnimatedPage>
  );
}
