import SignupConsultantForm from "../components/signupConsultantForm/signupConsultantForm";
import AnimatedPage from "../components/animatedPage/animatedPage";

import { useEffect } from "react";

export default function SignupConsultantPage() {
  useEffect(() => {
    document.title = "Sign Up Consultant | FreeMe";
  }, []);

  return (
    <AnimatedPage>
      <SignupConsultantForm />
    </AnimatedPage>
  );
}
