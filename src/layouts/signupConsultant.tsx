import SignupConsultantForm from "../components/signupConsultantForm/signupConsultantForm";
import Navbar from "../components/navbar/navbar";

import { useEffect } from "react";

export default function SignupConsultantPage() {
  useEffect(() => {
    document.title = "Sign Up Consultant | Free Me";
  }, []);

  return (
    <>
      <Navbar />
      <SignupConsultantForm />
    </>
  );
}
