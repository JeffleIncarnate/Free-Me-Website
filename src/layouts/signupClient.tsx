import SignupClientForm from "../components/signupClientForm/signupClientForm";

import { useEffect } from "react";

export default function SignupClientPage() {
  useEffect(() => {
    document.title = "Sign Up Client | FreeMe";
  }, []);

  return <SignupClientForm />;
}
