import Navbar from "../components/navbar/navbar";
import SignupClientForm from "../components/signupClientForm/signupClientForm";
import Switcher from "../components/switcher/switcher";

import { useEffect } from "react";

export default function SignupClientPage() {
  useEffect(() => {
    document.title = "Sign Up Client | FreeMe";
  }, []);

  return (
    <>
      <Navbar />
      <Switcher />
      <SignupClientForm />
    </>
  );
}
