import "./freerider.css";

import Computer from "../../../assets/communityNetwork/newLogos/computer.png";
import Tap from "../../../assets/communityNetwork/newLogos/tap.png";
import Umbrella from "../../../assets/communityNetwork/newLogos/umbrella.png";
import Fuel from "../../../assets/communityNetwork/newLogos/fuwl.png";
import Hotel from "../../../assets/communityNetwork/newLogos/hotel.png";
import Bank from "../../../assets/communityNetwork/newLogos/bank.png";

import SocialMediaCentre from "../../socialMedia/socialCentre/socialCentre";
import ProfileSmall from "../profileSmall/profileSmall";
import { useNavigate } from "react-router-dom";

export default function DashboardFreeRider() {
  let navigate = useNavigate();

  return (
    <main className="FRE__Dashboard__Freerider">
      <div
        className="FRE__Dashboard__Freerider-opps FRE__Dashboard__Freerider__Hover"
        onClick={() => {
          navigate("/socialMedia");
        }}
      >
        <DashboardFreeRiderSocialMedia />

        <article>
          <h2>Social Media</h2>
        </article>
      </div>
      <div
        className="FRE__Dashboard__Freerider-curr FRE__Dashboard__Freerider__Hover"
        onClick={() => {
          navigate("/sow");
        }}
      >
        <DashboardFreeRiderCurrentJobs />

        <article>
          <h2>Current Jobs</h2>
        </article>
      </div>
      <div
        className="FRE__Dashboard__Freerider-chats FRE__Dashboard__Freerider__Hover"
        onClick={() => {
          navigate("/chat");
        }}
      >
        <DashboardFreeRiderChats />

        <article>
          <h2>Chat</h2>
        </article>
      </div>
      <div
        className="FRE__Dashboard__Freerider-bal FRE__Dashboard__Freerider__Hover"
        onClick={() => {
          navigate("/balances");
        }}
      >
        <DashboardFreeRiderBalance />

        <article>
          <h2>Balance</h2>
        </article>
      </div>

      <div
        className="FRE__Dashboard__Freerider-profile FRE__Dashboard__Freerider__Hover"
        onClick={() => {
          navigate("/profile");
        }}
      >
        <ProfileSmall />

        <article>
          <h2>Profile</h2>
        </article>
      </div>
      <div
        className="FRE__Dashboard__Freerider-network FRE__Dashboard__Freerider__Hover"
        onClick={() => {
          navigate("/communityNetwork");
        }}
      >
        <DashboardFreeRiderCommunityNetwork />

        <article>
          <h2>Corporate Network</h2>
        </article>
      </div>
    </main>
  );
}

function DashboardFreeRiderSocialMedia() {
  return (
    <div className="wrapper">
      <SocialMediaCentre />
    </div>
  );
}

function DashboardFreeRiderCurrentJobs() {
  let jobs = [
    {
      name: "Software Contractor -- Dhruv Banking",
    },
    {
      name: "Graphic Designer -- Apple",
    },
    {
      name: "Survey -- Alphabet Inc",
    },
    {
      name: "Market Analysis -- INC company",
    },
    {
      name: "Market Analysis -- ABCompany",
    },
  ];

  return (
    <>
      <div className="wrapper">
        {jobs.map((job, index) => {
          return <DashboardFreeRiderCurrentJob index={index} name={job.name} />;
        })}
      </div>
    </>
  );
}

interface IProps {
  name: string;
  index: number;
}

const DashboardFreeRiderCurrentJob = ({ name, index }: IProps) => {
  return (
    <div className="FRE__Dashboard__Freerider-curr__Current">
      {`${index + 1}. ${name}`}
    </div>
  );
};

function DashboardFreeRiderChats() {
  const chats = [
    {
      companyName: "Dhruv Banking",
      lastMessage: "Hey, did you write the test for the backend API?",
      profilePicture:
        "https://raw.githubusercontent.com/Dhruv-Banking/Dhruv-Banking-API/rewrite/src/core/email/images/DhruvBanking.png",
    },
    {
      companyName: "Apple",
      lastMessage: "Did you make the schematic for the new iWater?",
      profilePicture:
        "data:image/jpeg;base64,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",
    },
  ];

  return (
    <>
      <div className="wrapper">
        {chats.map((chat) => {
          return (
            <DashboardFreeRiderChat
              companyName={chat.companyName}
              lastMessage={chat.lastMessage}
              profilePicture={chat.profilePicture}
            />
          );
        })}
      </div>
    </>
  );
}

const DashboardFreeRiderChat = ({
  companyName,
  lastMessage,
  profilePicture,
}: {
  [key: string]: string;
}) => {
  return (
    <div className="wrapper">
      <div className="FRE__Dashboard__Freerider-chat">
        <div className="FRE__Dashboard__Freerider-chat__Img">
          <img src={profilePicture} alt="" />
        </div>
        <div>
          <h3>{companyName}</h3>
          <p>{lastMessage}</p>
        </div>
      </div>
    </div>
  );
};

function DashboardFreeRiderBalance() {
  let balances = {
    total: 100,
    transaction: [
      {
        name: "FreeMe Subscription",
        moneyOut: true,
      },
      {
        name: "Corporate Network Cashback",
        moneyOut: false,
      },
      {
        name: "FreeMe Subscription",
        moneyOut: true,
      },
      {
        name: "GST",
        moneyOut: true,
      },
      {
        name: "Income Cashback",
        moneyOut: false,
      },
      {
        name: "FreeMe Subscription",
        moneyOut: true,
      },
      {
        name: "Corporate Network Cashback",
        moneyOut: false,
      },
      {
        name: "FreeMe Subscription",
        moneyOut: true,
      },
      {
        name: "GST",
        moneyOut: true,
      },
      {
        name: "Income Cashback",
        moneyOut: false,
      },
      {
        name: "FreeMe Subscription",
        moneyOut: true,
      },
      {
        name: "Corporate Network Cashback",
        moneyOut: false,
      },
      {
        name: "FreeMe Subscription",
        moneyOut: true,
      },
      {
        name: "GST",
        moneyOut: true,
      },
      {
        name: "Income Cashback",
        moneyOut: false,
      },
      {
        name: "FreeMe Subscription",
        moneyOut: true,
      },
      {
        name: "Corporate Network Cashback",
        moneyOut: false,
      },
      {
        name: "FreeMe Subscription",
        moneyOut: true,
      },
      {
        name: "GST",
        moneyOut: true,
      },
      {
        name: "Income Cashback",
        moneyOut: false,
      },
    ],
  };

  return (
    <>
      <div className="wrapper">
        {balances.transaction.map((transaction) => {
          return (
            <DashboardFreeRiderBalanceItem
              name={transaction.name}
              moneyOut={transaction.moneyOut}
            />
          );
        })}

        <p>
          <strong>Total:</strong> {balances.total}
        </p>
      </div>
    </>
  );
}

const DashboardFreeRiderBalanceItem = ({
  name,
  moneyOut,
}: {
  [key: string]: string | boolean;
}) => {
  return (
    <div
      style={{ color: moneyOut === true ? "#FAA0A0" : "#C1E1C1" }}
      className="FRE__Dashboard__Freerider-bal__Balance"
    >
      <p>
        <strong>{`${name} `}</strong>
        {moneyOut === true ? (
          <i className="fa-solid fa-arrow-down"></i>
        ) : (
          <i className="fa-solid fa-arrow-up"></i>
        )}
      </p>
    </div>
  );
};

function DashboardFreeRiderCommunityNetwork() {
  return (
    <>
      <div className="wrapper">
        <div className="FRE__Dashboard__Freerider-network__Left">
          <div>
            <img src={Computer} alt="" />
          </div>
          <div>
            <img src={Tap} alt="" />
          </div>
          <div>
            <img src={Umbrella} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
