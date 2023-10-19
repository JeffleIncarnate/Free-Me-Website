import "./dashboard.css";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import DashboardConsultant from "./consultant/consultant";
import DashboardClient from "./client/client";
import DashboardFreeRider from "./freerider/freerider";

// import DashboardClient from "../../tailwindComponents/dashboard/client";

export default function Dashboard() {
  let navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("type") === null) {
      navigate("/");
    }
  });

  return (
    <>
      {(() => {
        let type = sessionStorage.getItem("type");

        if (type === "consultant") {
          return <DashboardConsultant />;
        } else if (type === "client") {
          return <DashboardClient />;
        } else if (type === "freerider") {
          return <DashboardFreeRider />;
        }
      })()}
    </>
  );
}
