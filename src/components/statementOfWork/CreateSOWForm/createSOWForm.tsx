import "./createSOWForm.css";

import { useState, useRef } from "react";

interface IAddTask {
  id: number;
  jobDescription: string;
  amount: number;
  finishDay: number;
  clientConfirmed: true;
  consultantConfirmed: false;
}

interface ITimeline {
  id: number;
  amount: number;
  finishDay: number;
}

interface IConfirmTask {
  name: string;
  description: string;
  clientEmail: string;
  consultantEmail: string;
  tasks: IAddTask[];
  timeline: [{}];
}

export default function CreateSOWForm(props: any) {
  const [tasks, setTasks] = useState<IAddTask[]>([]);
  const [modalActive, setModalActive] = useState<boolean>(false);

  // Add Task refs
  const taskDescription = useRef(null);
  const amount = useRef(null);
  const finishDay = useRef(null);

  // SOW Refs
  const jobName = useRef(null);
  const jobDescription = useRef(null);
  const consultantEmail = useRef(null);

  enum days {
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  }

  enum months {
    "Janurary",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  }

  let confirmSOW = async (data: IConfirmTask) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(data);

    var requestOptions: any = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:3000/freeme/createStatementOfWork", requestOptions)
      .then((response) => response.json())
      .then((result) => alert(result.detail))
      .catch((error) => console.log("error", error));
  };

  let clearForm = async () => {
    (document.getElementById("taskDescription")! as any).value = null;
    (document.getElementById("amount")! as any).value = null;
    (document.getElementById("finishDay")! as any).value = null;
  };

  let addTaskSubmit = async () => {
    let taskDescriptionVar = (taskDescription.current! as any).value;
    let amountVar = (amount.current! as any).value;
    let finishDayVar = (finishDay.current! as any).value;

    clearForm();

    let date = new Date(finishDayVar).getTime();

    let tmp: IAddTask = {
      id: tasks?.length + 1,
      jobDescription: taskDescriptionVar,
      amount: parseInt(amountVar),
      finishDay: date,
      clientConfirmed: true,
      consultantConfirmed: false,
    };

    let newTasksList = [...tasks];

    newTasksList.push(tmp);
    setTasks(newTasksList);
    setModalActive(false);
  };

  return (
    <div className="FRE__Main-StatementOfWork__Form">
      <h2>Create SOW</h2>

      <div>
        <div className="FRE__Main-StatementOfWork__Form__Data-Input__Wrapper">
          <label htmlFor="">Job Name</label>
          <input type="text" placeholder="Enter Job Name" ref={jobName} />
        </div>
        <div className="FRE__Main-StatementOfWork__Form__Data-Input__Wrapper">
          <label htmlFor="">Job Description</label>
          <input
            type="text"
            placeholder="Enter Job Description"
            ref={jobDescription}
          />
        </div>
        <div className="FRE__Main-StatementOfWork__Form__Data-Input__Wrapper">
          <label htmlFor="">Consultant Email</label>
          <input
            type="text"
            placeholder="Enter Consultant Email"
            ref={consultantEmail}
          />
        </div>

        <article>
          <div className="FRE__Main-StatementOfWork__Form__Grid-Wrapper">
            <div className="FRE__Main-StatementOfWork__Form__Grid-Titles">
              <div>
                <p>NR</p>
              </div>
              <div>
                <p>Task Description</p>
              </div>
              <div>
                <p>Amount</p>
              </div>
              <div>
                <p>Confirmed Client</p>
              </div>
              <div>
                <p>Confirmed Consultant</p>
              </div>
            </div>

            {tasks.map((x) => {
              return (
                <SOWGridRow
                  id={x.id}
                  description={x.jobDescription}
                  amount={x.amount}
                  key={x.id}
                />
              );
            })}
          </div>

          {modalActive ? (
            <div className="FRE__Main-StatementOfWork__Form__Modal__Wrapper">
              <div>
                <p>
                  <strong>Current Day:</strong>{" "}
                  {(() => {
                    const date = new Date();

                    return `${days[date.getDay() - 1]} ${date.getDate()} ${
                      months[date.getMonth()]
                    } ${date.getFullYear()}
                    `;
                  })()}
                </p>
                <h1>Add Task</h1>

                <h3
                  onClick={() => {
                    setModalActive(false);
                  }}
                >
                  Cancel
                </h3>
                <form
                  onSubmit={(e: any) => {
                    e.preventDefault();
                    addTaskSubmit();
                  }}
                >
                  <div>
                    <label htmlFor="">Task Description</label>
                    <input
                      ref={taskDescription}
                      type="text"
                      placeholder="Enter Task Description"
                      id="taskDescription"
                    />
                  </div>

                  <div>
                    <label htmlFor="">Amount</label>
                    <input
                      ref={amount}
                      type="number"
                      placeholder="Enter Task Description"
                      id="amount"
                    />
                  </div>

                  <div>
                    <label htmlFor="">Expected Finish Date</label>
                    <input
                      ref={finishDay}
                      type="date"
                      placeholder="Enter Task Description"
                      id="finishDay"
                    />
                  </div>

                  <input type="submit" value="Submit" />
                </form>
              </div>
            </div>
          ) : null}

          <div
            className="FRE__Main-StatementOfWork__Form__Grid-Add__Task"
            onClick={() => {
              setModalActive(true);
            }}
          >
            <i className="fa-solid fa-plus"></i> Add Task
          </div>
        </article>

        <button
          onClick={() => {
            let arr: any = [];

            tasks.forEach((x) => {
              let tmp: any = { ...x };

              delete tmp["clientConfirmed"];
              delete tmp["consultantConfirmed"];

              arr.push(tmp);
            });

            let toSend: IConfirmTask = {
              name: (jobName.current! as any).value,
              description: (jobDescription.current! as any).value,
              clientEmail: sessionStorage.getItem("email")!,
              consultantEmail: (consultantEmail.current! as any).value,
              tasks: tasks,
              timeline: arr,
            };

            confirmSOW(toSend);
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}

function SOWGridRow(props: any) {
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
        <input type="checkbox" name="" id="" disabled />
      </div>
      <div>
        <input type="checkbox" name="" id="" disabled />
      </div>
    </div>
  );
}
