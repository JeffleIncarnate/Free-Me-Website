import "./smallChat.css";

export default function SmallChat(props: any) {
  return (
    <div
      className="FRE__Chat__Small"
      onClick={() => {
        props.setActiveChat({
          img: props.img,
          userName: props.userName,
        });
      }}
    >
      <div className="FRE__Chat__Small-Image_Circle">
        <img src={props.img} alt="" />
      </div>

      <div>
        <h3>{props.userName}</h3>
        <p>
          {props.receiving === "true"
            ? `Received: ${props.lastMessage}`
            : `Sent: ${props.lastMessage}`}
        </p>
      </div>
    </div>
  );
}
