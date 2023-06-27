import Computer from "../../../assets/communityNetwork/newLogos/computer.png";
import Tap from "../../../assets/communityNetwork/newLogos/tap.png";
import Umbrella from "../../../assets/communityNetwork/newLogos/umbrella.png";
import Fuel from "../../../assets/communityNetwork/newLogos/fuwl.png";
import Hotel from "../../../assets/communityNetwork/newLogos/hotel.png";
import Bank from "../../../assets/communityNetwork/newLogos/bank.png";

import SocialMediaCentre from "../../socialMedia/socialCentre/socialCentre";
import ProfileSmall from "../profileSmall/profileSmall";

import Dhruv from "../../../assets/Logo_Light.png";

import { useNavigate } from "react-router-dom";

export default function DashboardClient() {
  let navigate = useNavigate();

  return (
    <main className="FRE__Dashboard">
      <div className="FRE__Dashboard__Top">
        <div
          className="FRE__Dashboard-opps FRE__Dashboard__Hover"
          onClick={() => {
            navigate("/socialMedia");
          }}
        >
          <DashboardClientSocialMedia />

          <article>
            <h2>Social Media</h2>
          </article>
        </div>
        <div
          className="FRE__Dashboard-curr FRE__Dashboard__Hover"
          onClick={() => {
            navigate("/sow");
          }}
        >
          <DashboardClientCurrentJobs />

          <article>
            <h2>Current Jobs</h2>
          </article>
        </div>
        <div className="FRE__Dashboard-col">
          <div
            className="FRE__Dashboard-chats FRE__Dashboard__Hover"
            onClick={() => {
              navigate("/chat");
            }}
          >
            <DashboardClientChats />

            <article>
              <h2>Chat</h2>
            </article>
          </div>
          <div
            className="FRE__Dashboard-bal FRE__Dashboard__Hover"
            onClick={() => {
              navigate("/balances");
            }}
          >
            <DashboardClientBalance />

            <article>
              <h2>Balances</h2>
            </article>
          </div>
        </div>
      </div>

      <div className="FRE__Dashboard__Bottom">
        <div
          className="FRE__Dashboard-profile FRE__Dashboard__Hover"
          onClick={() => {
            navigate("/profile");
          }}
        >
          <ProfileSmall />

          <article>
            <h2>Balances</h2>
          </article>
        </div>
        <div
          className="FRE__Dashboard-network FRE__Dashboard__Hover"
          onClick={() => {
            navigate("/communityNetwork");
          }}
        >
          <DashboardClientCommunityNetwork />

          <article>
            <h2>Balances</h2>
          </article>
        </div>
      </div>
    </main>
  );
}

function DashboardClientSocialMedia() {
  return <SocialMediaCentre />;
}

function DashboardClientCurrentJobs() {
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
      {jobs.map((job, index) => {
        return <DashboardClientCurrentJob index={index} name={job.name} />;
      })}
    </>
  );
}

interface IProps {
  name: string;
  index: number;
}

const DashboardClientCurrentJob = ({ name, index }: IProps) => {
  return (
    <div className="FRE__Dashboard-curr__Current">{`${
      index + 1
    }. ${name}`}</div>
  );
};

function DashboardClientChats() {
  const chats = [
    {
      companyName: "Dhruv Rayat",
      lastMessage: "Can we change the order on some of the tasks in the SOW?",
      profilePicture: Dhruv,
    },
    {
      companyName: "James E. Thorpe",
      lastMessage: "I finished task 1 on the SOW",
      profilePicture:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    },
  ];

  return (
    <>
      {chats.map((chat) => {
        return (
          <DashboardClientChat
            companyName={chat.companyName}
            lastMessage={chat.lastMessage}
            profilePicture={chat.profilePicture}
          />
        );
      })}
    </>
  );
}

const DashboardClientChat = ({
  companyName,
  lastMessage,
  profilePicture,
}: {
  [key: string]: string;
}) => {
  return (
    <div className="FRE__Dashboard-chat">
      <div className="FRE__Dashboard-chat__Img">
        <img src={profilePicture} alt="" />
      </div>
      <div>
        <h3>{companyName}</h3>
        <p>{lastMessage}</p>
      </div>
    </div>
  );
};

function DashboardClientBalance() {
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
    ],
  };

  return (
    <>
      {balances.transaction.map((transaction) => {
        return (
          <DashboardClientBalanceItem
            name={transaction.name}
            moneyOut={transaction.moneyOut}
          />
        );
      })}

      <p>
        <strong>Total:</strong> {balances.total}
      </p>
    </>
  );
}

const DashboardClientBalanceItem = ({
  name,
  moneyOut,
}: {
  [key: string]: string | boolean;
}) => {
  return (
    <div
      style={{ color: moneyOut === true ? "#FAA0A0" : "#C1E1C1" }}
      className="FRE__Dashboard-bal__Balance"
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

function DashboardClientProfile() {
  return <h2>Profile</h2>;
}

function DashboardClientCommunityNetwork() {
  return (
    <>
      <div className="FRE__Dashboard-network__Left">
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
      <div className="FRE__Dashboard-network__Right">
        <div>
          <img src={Fuel} alt="" />
        </div>
        <div>
          <img src={Hotel} alt="" />
        </div>
        <div>
          <img src={Bank} alt="" />
        </div>
      </div>
    </>
  );
}
