import SignupClientForm from "../components/signupClientForm/signupClientForm";
import AnimatedPage from "../components/animatedPage/animatedPage";

import { useEffect } from "react";

export default function SignupClientPage() {
  useEffect(() => {
    document.title = "Sign Up Client | FreeMe";
  }, []);

  return (
    <AnimatedPage>
      <SignupClientForm />
    </AnimatedPage>
  );
}
