import "./notifcations.css";

import Notification from "./notification/notifcation";

import TiakiEngineering from "../../assets/TiakiEngineering.png";
import Shoof from "../../assets/Shoof.png";
import GoFox from "../../assets/GoFox.png";

import { NotificationData } from "./interfacesNotifications";

export default function Notifications() {
  let data: NotificationData[] = [
    {
      uuid: crypto.randomUUID(),
      companyName: "Tiaki Engineering",
      notificationName: "Feasibility analysis Tiaki Waikato",
      location: "Waikato, New Plymouth",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.",
      timeline: "Study to be conducted in April-May",
      img: TiakiEngineering,
      consultantExperience: "Experienced Consultant",
    },
    {
      uuid: crypto.randomUUID(),
      companyName: "Shoof",
      notificationName: "Equestrian consultant",
      location: "New Zealand",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.",
      timeline: "5 hours per week till 01-09-2023",
      img: Shoof,
      consultantExperience: "Experienced jockey or stable hand, or stable",
    },
    {
      uuid: crypto.randomUUID(),
      companyName: "Go-fox Putaruru",
      notificationName: "Business growth advisor",
      location: "Bay of Plenty, Rotorua",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.",
      timeline: "ASAP 3 hours per week",
      img: GoFox,
      consultantExperience: "resident of the Rototua",
    },
  ];

  return (
    <main className="FRE__Notifications">
      {data.map((notification: NotificationData) => {
        return <Notification data={notification} />;
      })}
    </main>
  );
}
