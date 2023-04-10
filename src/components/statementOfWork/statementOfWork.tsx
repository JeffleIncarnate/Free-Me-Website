import "./statementOfWork.css";

import crypto from "crypto";
import { useState } from "react";

interface IActiveChat {
  jobTitle: string | null;
  client: string | null;
  cosultant: string | null;
  tasks: [{}] | null;
}

let i = 0;

export default function StatementOfWork() {
  const [activeSow, SetActiveSow] = useState<IActiveChat>({
    jobTitle: null,
    client: null,
    cosultant: null,
    tasks: null,
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

        <StatementOfWorkSwicher data={jobs[0]} SetActiveSow={SetActiveSow} />

        <StatementOfWorkSwicher data={jobs[1]} SetActiveSow={SetActiveSow} />
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
    <div className="FRE__Main-StatementOfWork__Job">
      {props.isActive === "true" ? (
        <>
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
                  id={x.id}
                  description={x.description}
                  amount={x.amount}
                />
              );
            })}
          </div>
          <div className="FRE__Main-StatementOfWork__Job-Buttons">
            <button>Send</button>
          </div>
        </>
      ) : (
        <h3>Select a Statement of Work</h3>
      )}
    </div>
  );
}

function StatementOfWorkSwicher(props: any) {
  return (
    <button
      className="SattementOfWorkSwicher"
      onClick={() => {
        props.SetActiveSow({
          jobTitle: props.data.jobTitle,
          client: props.data.client,
          cosultant: props.data.cosultant,
          tasks: props.data.taks,
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
