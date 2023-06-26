import "./dashboard.css";

import { useNavigate, useLocation, useAsyncError } from "react-router-dom";
import { useEffect, useState } from "react";

import DashboardConsultant from "./consultant/consultant";
import DashboardClient from "./client/client";

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
        }

        if (type === "client") {
          return <DashboardClient />;
        }

        if (type === "freerider") {
          return <h1>fre</h1>;
        }
      })()}
    </>
  );
}
