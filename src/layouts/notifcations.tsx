import Notifications from "../components/notifications/notifcations";

import { useEffect } from "react";

export default function NotificationsPage() {
  useEffect(() => {
    document.title = "Notifications | FreeMe";
  }, []);

  return (
    <>
      <Notifications />
    </>
  );
}
