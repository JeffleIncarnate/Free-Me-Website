import "./dashboard.css";

import { useNavigate, useLocation, useAsyncError } from "react-router-dom";
import { useEffect, useState } from "react";

import DashboardConsultant from "./consultant/consultant";

export default function Dashboard() {
  let navigate = useNavigate();

  // useEffect(() => {
  //   if (sessionStorage.getItem("type") === null) {
  //     navigate("/");
  //   }
  // });

  return (
    <>
      {(() => {
        let type = sessionStorage.getItem("type");

        if (type === "consultant") {
          return <DashboardConsultant />;
        }

        if (type === "client") {
          return <h1>cli</h1>;
        }

        if (type === "freerider") {
          return <h1>fre</h1>;
        }
      })()}
    </>
  );
}
