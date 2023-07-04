import "./socialCentre.css";

import { IPostButton, IPost } from "../socialMediaInterface";

import SocialMediaCentrePost from "./socialCentrePost/socialCentrePost";

import LogoLight from "../../../assets/Logo_Light.png";
import Rick from "../../../assets/e_picture.jpeg";

export default function SocialMediaCentre() {
  let posts: IPost[] = [
    {
      name: "Apple",
      time: "12 Feburary 2022",
      profilePic:
        "https://i.pinimg.com/474x/b0/d2/6e/b0d26e8122dffa8a51081f7f814581d7.jpg",
      title: "New iPhone",
      text: "Announcing the new iPhone 20 :)",
      images: [
        "data:image/jpeg;base64,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",
        "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MHLM3?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1623348211000",
      ],
      likes: 420,
      comments: 69,
    },
    {
      name: "Square",
      time: "18 September 2022",
      profilePic:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Square%2C_Inc_-_Square_Logo.jpg/1200px-Square%2C_Inc_-_Square_Logo.jpg",
      title: "Launching",
      text: "Lorem ipsum dolar. Lorem ipsum dolar. Lorem ipsum dolar. Lorem ipsum dolar. Lorem ipsum dolar. Lorem ipsum dolar. Lorem ipsum dolar. Lorem ipsum dolar. Lorem ipsum dolar.",
      images: null,
      likes: 123,
      comments: 7,
    },
  ];

  return (
    <div className="FRE__Main__Centre">
      <SocialMediaCentreCreate />
      {posts.map((post) => {
        return <SocialMediaCentrePost postData={post} />;
      })}
    </div>
  );
}

function SocialMediaCentreCreate() {
  let buttons: IPostButton[] = [
    {
      name: "Photo",
      icon: "fa-solid fa-image",
    },
    {
      name: "Video",
      icon: "fa-solid fa-film",
    },
    {
      name: "Audio Event",
      icon: "fa-regular fa-calendar",
    },
    {
      name: "Write an Article",
      icon: "fa-solid fa-newspaper",
    },
  ];

  return (
    <div className="FRE__Main__Centre__Create">
      <SocialMediaCentreCreateTop />
    </div>
  );
}

function SocialMediaCentreCreateTop() {
  return (
    <div className="FRE__Main__Centre__Create__Top">
      <img
        src={
          sessionStorage.getItem("email") === "dhruvrayat50@gmail.com"
            ? LogoLight
            : sessionStorage.getItem("emai") === "e@gmail.com"
            ? Rick
            : "e"
        }
        alt=""
      />
      <input type="text" placeholder="Make a post..." />
    </div>
  );
}

function SocialMediaCentreCreateTopBottom({
  buttons,
}: {
  [key: string]: IPostButton[];
}) {
  return (
    <div className="FRE__Main__Centre__Create__Bottom">
      {buttons.map((button) => {
        return (
          <SocialMediaCentreCreateTopBottomButton
            icon={button.icon}
            name={button.name}
          />
        );
      })}
    </div>
  );
}

function SocialMediaCentreCreateTopBottomButton({ icon, name }: IPostButton) {
  return (
    <div className="FRE__Main__Centre__Create__Bottom__Button">
      <i className={icon}></i>
      <h3>{name}</h3>
    </div>
  );
}
