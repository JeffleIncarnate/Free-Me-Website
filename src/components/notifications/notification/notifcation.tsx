import "./notifcation.css";

import { NotificationData } from "../interfacesNotifications";

import NotificationLeft from "./notificationLeft/notificationLeft";
import NotificationRight from "./notificationRight/notificationRight";

export default function Notification({
  data,
}: {
  [key: string]: NotificationData;
}) {
  return (
    <div className="FRE__Notifications__Notif">
      <NotificationLeft
        img={data.img}
        companyName={data.companyName}
        location={data.location}
      />

      <NotificationRight
        notificationName={data.notificationName}
        description={data.description}
        consultantExperience={data.consultantExperience}
        timeline={data.timeline}
      />
    </div>
  );
}
