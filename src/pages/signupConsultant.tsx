import SignupConsultantForm from "../components/signupConsultantForm/signupConsultantForm";

import { useEffect } from "react";

export default function SignupConsultantPage() {
  useEffect(() => {
    document.title = "Sign Up Consultant | FreeMe";
  }, []);

  return <SignupConsultantForm />;
}
