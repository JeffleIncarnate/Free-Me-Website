import "./profileChat.css";

export default function ProfileChat(props: any) {
  return (
    <>
      {props.isActive === "true" ? (
        <div className="FRE__Chat__Right">
          <h2>e</h2>
        </div>
      ) : null}
    </>
  );
}
