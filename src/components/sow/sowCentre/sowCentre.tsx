import "./sowCentre.css";

import { ISOW, ISOWTableRows } from "../sowInterface";
import { useRef, useState } from "react";
import { ISOWAddTask } from "../sowInterface";

interface IProps {
  activeSow: ISOW | null;
}

export default function SOWCentre({ activeSow }: IProps) {
  return (
    <div className="FRE__StatementOfWork__Centre">
      {activeSow !== null ? (
        <SOWCentreActiveSOW activeSow={activeSow} />
      ) : (
        <SOWCentreNoSOW />
      )}
    </div>
  );
}

interface ISOWCentreActiveSOW {
  activeSow: ISOW;
}

function SOWCentreActiveSOW({ activeSow }: ISOWCentreActiveSOW) {
  const [optimunRows, setOptimumRows] = useState<ISOWTableRows[]>(
    activeSow.tasks
  );

  return (
    <>
      <div className="FRE__StatementOfWork__Centre__JobTitle">
        <h1>{activeSow.name}</h1>
      </div>

      <div className="FRE__StatementOfWork__Centre__JobDescription">
        <p>
          <strong>Description:</strong> {activeSow.description}
        </p>
      </div>

      <div className="FRE__StatementOfWork__Centre__JobEmails">
        <p>
          <strong>Client Email:</strong> {activeSow.clientemail}
        </p>
        <p>
          <strong>Consultant Email:</strong> {activeSow.consultantemail}
        </p>
      </div>

      <div className="FRE__StatementOfWork__Centre__Table">
        <SOWCentreActiveSOWTable
          client={activeSow.agreed.client}
          consultant={activeSow.agreed.consultant}
          rows={activeSow.tasks}
          optimunRows={optimunRows}
          setOptimumRows={setOptimumRows}
          activeSOW={activeSow}
        />
      </div>

      <div className="FRE__StatementOfWork__Centre__Buttons"></div>
    </>
  );
}

interface ISOWCentreActiveSOWTableProps {
  client: boolean | undefined;
  consultant: boolean | undefined;
  rows: ISOWTableRows[];
  optimunRows: ISOWTableRows[];
  setOptimumRows: (_: ISOWTableRows[]) => void;
  activeSOW: ISOW;
}

function SOWCentreActiveSOWTable({
  client,
  consultant,
  rows,
  optimunRows,
  setOptimumRows,
  activeSOW,
}: ISOWCentreActiveSOWTableProps) {
  return (
    <>
      {client === true && consultant === true ? (
        <SOWCentreActiveSOWTableConfirmed rows={rows} />
      ) : (
        <SOWCentreActiveSOWTableNotConfirmed
          setRows={setOptimumRows}
          rows={optimunRows}
          origionalRows={rows}
          sowUuid={activeSOW.uuid}
        />
      )}
    </>
  );
}

function SOWCentreActiveSOWTableConfirmed({
  rows,
}: {
  [key: string]: ISOWTableRows[] | undefined;
}) {
  return (
    <div className="FRE__StatementOfWork__Centre__Table__Confirmed">
      <div className="FRE__StatementOfWork__Centre__Table__Confirmed__Tasks">
        {rows?.map((row: ISOWTableRows, index: number) => {
          return (
            <SOWCentreActiveSOWTableConfirmedRow
              row={row}
              index={index}
              key={crypto.randomUUID()}
            />
          );
        })}
      </div>

      <button>FreeMe Arbitrage</button>
    </div>
  );
}

interface ISOWCentreActiveSOWTableNotConfirmedRowProps {
  row: ISOWTableRows;
  index: number;
  isOld?: boolean;
}

function SOWCentreActiveSOWTableConfirmedRow({
  row,
  index,
}: ISOWCentreActiveSOWTableNotConfirmedRowProps) {
  return (
    <div className="FRE__StatementOfWork__Centre__Table__Confirmed__Task">
      <p>
        <strong>Task:</strong> {index + 1}
      </p>
      <p>
        <strong>Description:</strong> {row.jobDescription}
      </p>

      <div className="FRE__StatementOfWork__Centre__Table__Confirmed__Task__Checks">
        <div className="FRE__StatementOfWork__Centre__Table__Confirmed__Task__Deliverd">
          <p>
            <strong>Services Delivered</strong>
          </p>
          <input type="checkbox" name="" id="" />
        </div>
        <div className="FRE__StatementOfWork__Centre__Table__Confirmed__Task__Recieved">
          <p>
            <strong>Services Received</strong>
          </p>
          <input type="checkbox" name="" id="" />
        </div>
      </div>
    </div>
  );
}

interface ISOWCentreActiveSOWTableNotConfirmed {
  rows: ISOWTableRows[];
  setRows: (_: ISOWTableRows[]) => void;
  origionalRows: ISOWTableRows[];
  sowUuid: string;
}

function SOWCentreActiveSOWTableNotConfirmed({
  rows,
  setRows,
  origionalRows,
  sowUuid,
}: ISOWCentreActiveSOWTableNotConfirmed) {
  function containsObject(obj: ISOWTableRows, list: ISOWTableRows[]) {
    for (let i = 0; i < list.length; i++) {
      if (JSON.stringify(list[i]) === JSON.stringify(obj)) {
        return true;
      }
    }
    return false;
  }

  return (
    <div className="FRE__StatementOfWork__Centre__Table__NotConfirmed">
      <div className="FRE__StatementOfWork__Centre__Table__NotConfirmed__Title">
        <p>NR</p>
        <p>Task Description</p>
        <p>Amount</p>
        <p>Client Confirmed</p>
        <p>Consultant Confirmed</p>
      </div>
      <div className="FRE__StatementOfWork__Centre__Table__NotConfirmed__Rows">
        {rows.map((row: ISOWTableRows, index: number) => {
          return (
            <SOWCentreActiveSOWTableNotConfirmedRow
              row={row}
              index={index}
              key={crypto.randomUUID()}
              isOld={containsObject(row, origionalRows)}
            />
          );
        })}
      </div>
      <div className="FRE__StatementOfWork__Centre__Table__NotConfirmed__AddTask">
        <SOWCentreActiveSOWTableAddTask
          optimunRows={rows}
          setOptimumRows={setRows}
        />
      </div>
      <h2 className="FRE__StatementOfWork__Centre__Table__NotConfirmed__Text">
        {sessionStorage.getItem("type") === "client"
          ? "Consultant has not yet confirmed SOW"
          : "You have not confimed SOW"}
      </h2>
      <div className="FRE__StatementOfWork__Centre__Table__NotConfirmed__Buttons">
        <SOWCentreActiveSOWButtons
          origionalRows={origionalRows}
          optimunRows={rows}
          sowUuid={sowUuid}
        />
      </div>
    </div>
  );
}

function SOWCentreActiveSOWTableNotConfirmedRow({
  row,
  index,
  isOld,
}: ISOWCentreActiveSOWTableNotConfirmedRowProps) {
  return (
    <div className="FRE__StatementOfWork__Centre__Table__NotConfirmed__Row">
      <p style={!isOld ? { backgroundColor: "rgba(255,105,97,0.4)" } : {}}>
        {index + 1}
      </p>
      <p style={!isOld ? { backgroundColor: "rgba(255,105,97,0.4)" } : {}}>
        {row.jobDescription}
      </p>
      <p style={!isOld ? { backgroundColor: "rgba(255,105,97,0.4)" } : {}}>
        {row.amount}
      </p>
      <p style={!isOld ? { backgroundColor: "rgba(255,105,97,0.4)" } : {}}>
        <input type="checkbox" name="" id="" disabled />
      </p>
      <p style={!isOld ? { backgroundColor: "rgba(255,105,97,0.4)" } : {}}>
        <input type="checkbox" name="" id="" disabled />
      </p>
    </div>
  );
}

interface ISOWCentreActiveSOWTableAddTask {
  optimunRows: ISOWTableRows[];
  setOptimumRows: (_: ISOWTableRows[]) => void;
}

function SOWCentreActiveSOWTableAddTask({
  optimunRows,
  setOptimumRows,
}: ISOWCentreActiveSOWTableAddTask) {
  const [creatingTask, setCreatingTask] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setCreatingTask(true);
        }}
      >
        <span>+</span> Add Task
      </button>

      {creatingTask ? (
        <SOWLeftCreateSOWModalAddTask
          setShowTaskModal={setCreatingTask}
          tasks={optimunRows}
          setTasks={setOptimumRows}
        />
      ) : null}
    </>
  );
}

interface ISOWLeftCreateSOWModalAddTaskProps {
  setShowTaskModal: (creatingSOW: boolean) => void;
  tasks: ISOWAddTask[];
  setTasks: (tasks: ISOWAddTask[]) => void;
}

function SOWLeftCreateSOWModalAddTask({
  setShowTaskModal,
  tasks,
  setTasks,
}: ISOWLeftCreateSOWModalAddTaskProps) {
  let closeModal = () => {
    setShowTaskModal(false);
  };

  const amount = useRef(null);
  const taskDescription = useRef(null);
  const finishDay = useRef(null);

  return (
    <div className="FRE__StatementOfWork__Left__AddTask__Backdrop">
      <div className="FRE__StatementOfWork__Left__AddTask">
        <button
          className="FRE__StatementOfWork__Left__AddTask__Close"
          onClick={() => {
            closeModal();
          }}
        >
          <i className="fa-solid fa-x"></i>
        </button>

        <form
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            let data: ISOWAddTask = {
              id: tasks.length + 1,
              jobDescription: (taskDescription.current! as any).value,
              amount: parseInt((amount.current! as any).value),
              relativeFinishDate: new Date(
                (finishDay.current! as any).value
              ).getTime(),
              clientConfirmed: false,
              consultantConfirmed: false,
            };

            // Check to make sure the money is greater than
            if (data.amount < 1) {
              (amount.current! as any).value = "";
              return alert("Can not set a task to have negative money.");
            }

            // Check to make sure the date is after today.
            if (data.relativeFinishDate < Date.now()) {
              // Reset the calender input
              (finishDay.current! as any).value = "";
              return alert("Can not set finish date before today.");
            }

            let newTasksList = [...tasks];

            newTasksList.push(data);

            setTasks(newTasksList);

            closeModal();
          }}
          className="FRE__StatementOfWork__Left__AddTask__Form"
        >
          <h1>Add Task</h1>

          <div className="FRE__StatementOfWork__Left__AddTask__Form__Data">
            <section>
              <div>
                <label htmlFor="">Amount</label>
                <input
                  type="number"
                  placeholder="Enter task description"
                  ref={amount}
                  required
                  min={1}
                />
              </div>

              <div>
                <label htmlFor="">Finish Day</label>
                <input type="date" ref={finishDay} required />
              </div>
            </section>

            <div>
              <label htmlFor="">Task Description</label>
              <textarea
                ref={taskDescription}
                placeholder="Enter your task description"
                required
              ></textarea>
            </div>
          </div>

          <button>Add Task</button>
        </form>
      </div>
    </div>
  );
}

interface ISOWCentreActiveSOWButtons {
  origionalRows: ISOWTableRows[];
  optimunRows: ISOWTableRows[];
  sowUuid: string;
}

function SOWCentreActiveSOWButtons({
  origionalRows,
  optimunRows,
  sowUuid,
}: ISOWCentreActiveSOWButtons) {
  return (
    <>
      {sessionStorage.getItem("type") === "client" ? (
        JSON.stringify(origionalRows) !== JSON.stringify(optimunRows) ? (
          <>
            <button
              onClick={() => {
                let newTasks = optimunRows;
                let timeline = JSON.parse(JSON.stringify(optimunRows));

                timeline.map((task: any) => {
                  delete task["clientConfirmed"];
                  delete task["consultantConfirmed"];
                });

                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");

                var raw = JSON.stringify({
                  uuid: "1f1b84ed-3e36-49dd-ac92-8f72463f62ee",
                  tasks: newTasks,
                  timeline: timeline,
                });

                var requestOptions: RequestInit = {
                  method: "POST",
                  headers: myHeaders,
                  body: raw,
                  redirect: "follow",
                };

                fetch(
                  "http://localhost:3000/freeme/updateSowTasks",
                  requestOptions
                )
                  .then((response) => response.json())
                  .then((result) => {
                    if (
                      result.detail === "Successfully updated statement of work"
                    ) {
                      alert("Successfully upadated the statement of work");
                    } else {
                      alert("An unknown error has occoured");
                    }
                  })
                  .catch((error) => console.log("error", error));
              }}
            >
              Confirm Changes
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => {
                alert("client confirm Statement of work");
              }}
            >
              Confirm SOW
            </button>
          </>
        )
      ) : (
        <>
          <button>Send</button>
          <button>Confirm</button>
        </>
      )}
    </>
  );
}

function SOWCentreNoSOW() {
  return (
    <h2 className="FRE__StatementOfWork__Centre__NoSow">
      Please Select a statement of work
    </h2>
  );
}
