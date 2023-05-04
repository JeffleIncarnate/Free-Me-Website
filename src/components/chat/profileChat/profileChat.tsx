import "./profileChat.css";

export default function ProfileChat({
  data,
}: {
  [key: string]: { [key: string]: any };
}) {
  return (
    <>
      <div className="FRE__Chat__Right">
        {data.userName === "Rick Astley" ? (
          <div className="FRE__Chat__Right__Profile">
            <img src={data.img} alt="" />
            <h2>{data.userName}</h2>
          </div>
        ) : data.userName === "Ferd Swinkels" ? (
          <h2>Ferd Swinkels</h2>
        ) : (
          <h2>Select a Chat</h2>
        )}
      </div>
    </>
  );
}
