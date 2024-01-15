import { useEffect } from "react";

import Dashboard from "../components/dashboard/dashboard";

export default function DashboardPage() {
  useEffect(() => {
    document.title = "Dashboard | FreeMe";
  }, []);

  return (
    <>
      <Dashboard />
    </>
  );
}
