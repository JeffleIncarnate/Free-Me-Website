import Navbar from "../components/navbar/navbar";
import Dashboard from "../components/dashboard/dashboard";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function DashboardPage() {
  let navigate = useNavigate();

  let reload = false;

  useEffect(() => {
    document.title = "Dashboard | Free me";

    if (sessionStorage.getItem("token") === null) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <Navbar />
      <Dashboard />
    </>
  );
}
