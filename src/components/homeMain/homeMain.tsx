import "./homeMain.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconDefinition,
  faUserTie,
  faUserGraduate,
  faUserClock,
} from "@fortawesome/free-solid-svg-icons";
import { FC } from "react";

interface UserTypeProps {
  userName: "Client" | "Consultant" | "Freerider";
  icon: IconDefinition;
  description: string;
}

export default function HomeMain() {
  const users: UserTypeProps[] = [
    {
      userName: "Client",
      icon: faUserTie,
      description:
        "As a client... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla, nulla ut tincidunt tristique, arcu.",
    },
    {
      userName: "Consultant",
      icon: faUserGraduate,
      description:
        "As a Consultant... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla, nulla ut tincidunt tristique, arcu.",
    },

    {
      userName: "Freerider",
      icon: faUserClock,
      description:
        "As a Freerider... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla, nulla ut tincidunt tristique, arcu.",
    },
  ];

  return (
    <main className="HomeMain">
      <div className="JoinUs" id="JoinUs">
        <h2>Which User is Right For You?</h2>

        <div className="JoinUs__Wrapper">
          {users.map((user) => (
            <UserType
              userName={user.userName}
              icon={user.icon}
              description={user.description}
              key={crypto.randomUUID()}
            />
          ))}
        </div>
      </div>

      <div className="CorporateNetwork">
        <h2>Corporate Network</h2>
      </div>
    </main>
  );
}

const UserType: FC<UserTypeProps> = ({ userName, icon, description }) => {
  return (
    <div className="UserType">
      <FontAwesomeIcon icon={icon} className="UserType__Icon" />

      <h3 className="UserType__UserName">{userName}</h3>

      <p className="UserType__Description">{description}</p>
    </div>
  );
};
