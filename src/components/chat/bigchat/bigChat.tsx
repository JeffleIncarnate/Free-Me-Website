import "./bigChat.css";

export default function BigChat(props: any) {
  return (
    <div className="FRE__Chat__Big">
      {props.isActive === "true" ? (
        <>
          <div className="FRE__Chat__Big-Top">
            <div className="FRE__Chat__Big-Top__Image_Cricle">
              <img src={props.data.img} alt="" />
            </div>

            <h2>{props.data.userName}</h2>

            <div>
              <i className="fa-solid fa-phone"></i>
              <i className="fa-solid fa-video"></i>
              <i className="fa-solid fa-circle-info"></i>
            </div>
          </div>
          <div className="FRE__Chat__Big-Middle"></div>
          <div className="FRE__Chat__Big-Bottom">
            <div className="FRE__Chat__Big-Bottom__Icons">
              <i className="fa-solid fa-circle-plus"></i>
              <i className="fa-solid fa-photo-film"></i>
            </div>

            <div className="FRE__Chat__Big-Bottom__Message">
              <input type="text" placeholder="Aa" />
            </div>
          </div>
        </>
      ) : (
        <h2>Select a Chat</h2>
      )}
    </div>
  );
}
