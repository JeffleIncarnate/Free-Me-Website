import SignupConsultantForm from "../components/signupConsultantForm/signupConsultantForm";
import Navbar from "../components/navbar/navbar";
import Switcher from "../components/switcher/switcher";

import { useEffect } from "react";

export default function SignupConsultantPage() {
  useEffect(() => {
    document.title = "Sign Up Consultant | FreeMe";
  }, []);

  return (
    <>
      <Navbar />
      <Switcher />
      <SignupConsultantForm />
    </>
  );
}
