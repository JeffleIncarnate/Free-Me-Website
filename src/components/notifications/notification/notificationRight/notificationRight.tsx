export default function NotificationRight({
  notificationName,
  description,
  consultantExperience,
  timeline,
}: {
  [key: string]: string;
}) {
  return (
    <div className="FRE__Notifications__Notif__Right">
      <div>
        <h3>{notificationName}</h3>
      </div>

      <div>
        <h3>Description</h3>
        <p>{description}</p>
        <p>Expertise level: {consultantExperience}</p>
      </div>

      <div>
        <h3>Timeline: {timeline}</h3>
      </div>
    </div>
  );
}
