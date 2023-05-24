import "./socialLeft.css";

import { ISocialMediaLeftButtons } from "../socialMediaInterface";

export default function SocialMediaLeft() {
  let buttons: ISocialMediaLeftButtons = {
    friends: "fa-solid fa-user",
    events: "fa-solid fa-calendar-days",
    "Most Recent": "fa-solid fa-clock",
    groups: "fa-solid fa-user-group",
    marketplace: "fa-solid fa-house",
    watch: "fa-solid fa-video",
    "See More": "fa-solid fa-angle-down",
  };

  return (
    <div className="FRE__Main__Left">
      <SocialMediaLeftTop buttons={buttons} />
    </div>
  );
}

function SocialMediaLeftTop({
  buttons,
}: {
  [key: string]: ISocialMediaLeftButtons;
}) {
  return (
    <div className="FRE__Main__Left__Buttons">
      <div className="FRE__Main__Left__Buttons__User">
        <img
          src="https://images.unsplash.com/photo-1600354587397-681c16c184bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          alt=""
        />

        <h2>Rick Astley</h2>
      </div>

      <div className="FRE__Main__Left__Buttons__Buttons">
        <SocialMediaLeftButton icon={buttons.friends} name={"Friends"} />
        <SocialMediaLeftButton icon={buttons.events} name={"Events"} />
        <SocialMediaLeftButton
          icon={buttons["Most Recent"]}
          name={"Most Recent"}
        />
        <SocialMediaLeftButton icon={buttons.groups} name={"Groups"} />
        <SocialMediaLeftButton
          icon={buttons.marketplace}
          name={"Market Place"}
        />
        <SocialMediaLeftButton icon={buttons.watch} name={"Watch"} />
        <SocialMediaLeftButton icon={buttons["See More"]} name={"See More"} />
      </div>
    </div>
  );
}

function SocialMediaLeftButton({ icon, name }: { [key: string]: string }) {
  return (
    <div className="FRE__Main__Left__Buttons__Buttons__Button">
      <i className={icon}></i>
      <h3>{name}</h3>
    </div>
  );
}
