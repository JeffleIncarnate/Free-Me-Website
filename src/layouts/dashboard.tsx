import Dashboard from "../components/dashboard/dashboard";
import AnimatedPage from "../components/animatedPage/animatedPage";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function DashboardPage() {
  let navigate = useNavigate();

  useEffect(() => {
    document.title = "Dashboard | FreeMe";
  }, []);

  return (
    <AnimatedPage>
      <Dashboard />
    </AnimatedPage>
  );
}
