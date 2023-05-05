export default function NotificationLeft({
  img,
  companyName,
  location,
}: {
  [key: string]: string;
}) {
  return (
    <div className="FRE__Notifications__Notif__Left">
      <img src={img} alt="" />

      <h2>{companyName}</h2>
      <p>{location}</p>
    </div>
  );
}
