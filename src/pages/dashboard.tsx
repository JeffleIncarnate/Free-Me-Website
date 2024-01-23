import Dashboard from "../components/dashboard/dashboard";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function DashboardPage() {
  useEffect(() => {
    document.title = "Dashboard | FreeMe";
  }, []);

  return <Dashboard />;
}
