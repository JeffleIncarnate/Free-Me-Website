import "./socialCentrePost.css";

import {
  IPost,
  IPostProfile,
  IPostBody,
  IPostAction,
} from "../../socialMediaInterface";

export default function SocialMediaCentrePost({
  postData,
}: {
  [key: string]: IPost;
}) {
  return (
    <div className="FRE__Main__Centre__Post">
      <SocialMediaCentrePostProfile
        name={postData.name}
        profilePic={postData.profilePic}
        time={postData.time}
        title={postData.title}
      />
      <SocialMediaCentrePostBody
        images={postData.images}
        text={postData.text}
      />
      <SocialMediaCentrePostActions data={postData} />
    </div>
  );
}

function SocialMediaCentrePostProfile({
  name,
  profilePic,
  time,
  title,
}: IPostProfile) {
  return (
    <div className="FRE__Main__Centre__Post__Profile">
      <div className="FRE__Main__Centre__Post__Profile__Picture">
        <img src={profilePic} alt="" />
      </div>
      <div className="FRE__Main__Centre__Post__Profile__Text">
        <p>
          <strong>{name}</strong> -- <span>{title}</span>
        </p>
        <p>{time}</p>
      </div>
      <div className="FRE__Main__Centre__Post__Profile__Icon">
        <i className="fa-solid fa-ellipsis"></i>
      </div>
    </div>
  );
}

function SocialMediaCentrePostBody({ images, text }: IPostBody) {
  return (
    <div className="FRE__Main__Centre__Post__Body">
      <p>{text}</p>
      {images !== null ? (
        <div>
          {images?.map((img) => {
            return <img src={img} alt="" />;
          })}
        </div>
      ) : null}
    </div>
  );
}

function SocialMediaCentrePostActions({ data }: { [key: string]: IPost }) {
  return (
    <div className="FRE__Main__Centre__Post__Actions">
      <SocialMediaCentrePostAction
        icon={"fa-solid fa-thumbs-up"}
        name={"Likes"}
        number={data.likes}
      />

      <SocialMediaCentrePostAction
        icon={"fa-solid fa-comment"}
        name={"Comments"}
        number={data.comments}
      />

      <SocialMediaCentrePostAction
        icon={"fa-solid fa-share"}
        name={"Share"}
        number={null}
      />
    </div>
  );
}

function SocialMediaCentrePostAction({ icon, name, number }: IPostAction) {
  return (
    <div className="FRE__Main__Centre__Post__Action">
      <i className={icon}></i>
      <p>{name}</p>
      {number !== null ? <span>{number}</span> : null}
    </div>
  );
}
