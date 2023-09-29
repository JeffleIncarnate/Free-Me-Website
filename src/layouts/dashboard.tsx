import Navbar from "../components/navbar/navbar";
import Dashboard from "../components/dashboard/dashboard";
import Switcher from "../components/switcher/switcher";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function DashboardPage() {
  let navigate = useNavigate();

  useEffect(() => {
    document.title = "Dashboard | FreeMe";
  }, []);

  return (
    <>
      <Navbar />
      <Switcher />
      <Dashboard />
    </>
  );
}
