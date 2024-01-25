import "./dashboard.css";

import { CSSProperties } from "react";
import { store } from "../../core/state/store";

import Hash from "react-spinners/HashLoader";

import DashboardConsultant from "./consultant/consultant";
import DashboardClient from "./client/client";
import DashboardFreeRider from "./freerider/freerider";

// import DashboardClient from "../../tailwindComponents/dashboard/client";
// import DashboardConsultant from "../../tailwindComponents/dashboard/consultant";

const override: CSSProperties = {
  display: "block",
  margin: "12rem auto",
};

export default function Dashboard() {
  const userType = store.getState().userData.type;

  return <ReturnDashboard type={userType} />;
}

const ReturnDashboard = ({
  type,
}: {
  type: "CLIENT" | "CONSULTANT" | "FREERIDER" | undefined;
}) => {
  if (type === "CLIENT") {
    return <DashboardClient />;
  } else if (type === "CONSULTANT") {
    return <DashboardConsultant />;
  } else if (type === "FREERIDER") {
    return <DashboardFreeRider />;
  } else {
    return <Hash cssOverride={override} color="#d35f12" size={150} />;
  }
};
