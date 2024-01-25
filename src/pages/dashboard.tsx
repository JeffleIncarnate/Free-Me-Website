import Dashboard from "../components/dashboard/dashboard";

import { useEffect } from "react";

export default function DashboardPage() {
  useEffect(() => {
    document.title = "Dashboard | FreeMe";
  }, []);

  return <Dashboard />;
}
