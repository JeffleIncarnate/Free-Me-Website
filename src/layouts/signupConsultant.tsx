import SignupConsultantForm from "../components/signupConsultantForm/signupConsultantForm";
import Navbar from "../components/navbar/navbar";
import Switcher from "../components/switcher/switcher";
import AnimatedPage from "../components/animatedPage/animatedPage";

import { useEffect } from "react";

export default function SignupConsultantPage() {
  useEffect(() => {
    document.title = "Sign Up Consultant | FreeMe";
  }, []);

  return (
    <AnimatedPage>
      <Navbar />
      <Switcher />
      <SignupConsultantForm />
    </AnimatedPage>
  );
}
