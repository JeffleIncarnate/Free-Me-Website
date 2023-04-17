import "./statementOfWork.css";

import { useState } from "react";
import CreateSOWButton from "./CreateSOWButton/createSOWButton";
import CreateSOWForm from "./CreateSOWForm/createSOWForm";

export interface IActiveSOW {
  jobTitle: string | null;
  client: string | null;
  cosultant: string | null;
  tasks: [{}] | null;
  createSOW: boolean;
}

let i = 0;

export default function StatementOfWork() {
  const [activeSow, setActiveSow] = useState<IActiveSOW>({
    jobTitle: null,
    client: null,
    cosultant: null,
    tasks: null,
    createSOW: false,
  });

  let jobs = [
    {
      jobTitle: "Graphic Design",
      client: "Snoopy Singh",
      cosultant: "Dhruv Rayat",
      taks: [
        {
          id: 1,
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, et?",
          amount: 240,
        },
        {
          id: 2,
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, et?",
          amount: 167,
        },
        {
          id: 3,
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, et?",
          amount: 167,
        },
        {
          id: 4,
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, et?",
          amount: 167,
        },
      ],
    },
    {
      jobTitle: "Software Design",
      client: "Ferd Swinkels",
      cosultant: "Dhruv Rayat",
      taks: [
        {
          id: 1,
          description: "Gotta get good",
          amount: 240,
        },
        {
          id: 2,
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, et?",
          amount: 167,
        },
        {
          id: 3,
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, et?",
          amount: 167,
        },
        {
          id: 4,
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, et?",
          amount: 167,
        },
      ],
    },
  ];

  return (
    <main className="FRE__Main-StatementOfWork">
      <div className="FRE__Main-StatementOfWork__Cur__Jobs">
        <h2>Current Jobs</h2>

        <StatementOfWorkSwicher data={jobs[0]} setActiveSow={setActiveSow} />

        <StatementOfWorkSwicher data={jobs[1]} setActiveSow={setActiveSow} />

        {sessionStorage.getItem("type") === "client" ? (
          <CreateSOWButton setActiveSow={setActiveSow} i={i} />
        ) : null}
      </div>

      <StatementOfWorkMiddle
        isActive={activeSow.client === null ? "false" : "true"}
        data={activeSow}
      />

      <div className="FRE__Main-StatementOfWork__Timeline">
        <h2>Timeline</h2>
      </div>
    </main>
  );
}

function StatementOfWorkMiddle(props: any) {
  return (
    <>
      {(() => {
        if (props.data.createSOW === true) {
          return <CreateSOWForm />;
        } else if (props.isActive === "true") {
          return (
            <div className="FRE__Main-StatementOfWork__Job">
              <h2>{props.data.jobTitle}</h2>
              <div className="FRE__Main-StatementOfWork__Job-Data">
                <ul>
                  <li>
                    <strong>Client Name: </strong> {props.data.client}
                  </li>
                  <li>
                    <strong>Consultant name: </strong> {props.data.cosultant}
                  </li>
                </ul>
              </div>
              <div className="FRE__Main-StatementOfWork__Job-Table">
                <h3>Job description</h3>
                <div className="FRE__Main-StatementOFWork__Job-Table__Titles">
                  <div className="FRE__Main-StatementOfWork__Job-Table__Title__NR">
                    <p>NR</p>
                  </div>
                  <div className="FRE__Main-StatementOfWork__Job-Table__Title__TaskDescripton">
                    <p>Task Description</p>
                  </div>
                  <div className="FRE__Main-StatementOfWork__Job-Table__Title__Amount">
                    <p>Amount</p>
                  </div>
                  <div className="FRE__Main-StatementOfWork__Job-Table__Title__ConfirmedClient">
                    <p>Confirmed Client</p>
                  </div>
                  <div className="FRE__Main-StatementOfWork__Job-Table__Title__ConfirmedConsultant">
                    <p>Confirmed Consultant</p>
                  </div>
                </div>

                {props.data.tasks.map((x: any) => {
                  i++;
                  return (
                    <StatementOfWorkRow
                      key={x.id}
                      id={i}
                      description={x.description}
                      amount={x.amount}
                    />
                  );
                })}
              </div>
              <div className="FRE__Main-StatementOfWork__Job-Buttons">
                <button>Send</button>
              </div>
            </div>
          );
        } else {
          return (
            <div className="FRE__Main-StatementOfWork__Job">
              <h3>Select a Statement of Work</h3>
            </div>
          );
        }
      })()}
    </>
  );
}

function StatementOfWorkSwicher(props: any) {
  return (
    <button
      className="StatementOfWorkSwitcher"
      onClick={() => {
        i = 0;
        props.setActiveSow({
          jobTitle: props.data.jobTitle,
          client: props.data.client,
          cosultant: props.data.cosultant,
          tasks: props.data.taks,
          createSOW: false,
        });
      }}
    >
      - {props.data.jobTitle}
    </button>
  );
}

function StatementOfWorkRow(props: any) {
  return (
    <div
      className={`FRE__Main-StatementOfWork__Job-Table__Row ${
        props.id % 2 == 0
          ? "FRE__Main-StatementOfWork__Job-Table__Row__Even"
          : "FRE__Main-StatementOfWork__Job-Table__Row__Odd"
      }`}
    >
      <div>
        <p>{props.id}</p>
      </div>
      <div>{props.description}</div>
      <div>{props.amount}</div>
      <div>
        <input type="checkbox" name="" id="" />
      </div>
      <div>
        <input type="checkbox" name="" id="" disabled />
      </div>
    </div>
  );
}
