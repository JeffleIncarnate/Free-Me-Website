import "./sowLeft.css";

import { useEffect, useState, useRef } from "react";
import { ISOW, ISOWAddTask, ISOWTimelineId } from "../sowInterface";
import { apiURL } from "../../../core/data";

interface IProps {
  setActiveSow: (item: ISOW) => void;
}

export default function SOWLeft({ setActiveSow }: IProps) {
  const [jobs, setJobs] = useState<ISOW[] | null>(null);

  let getCurrentJobs = () => {
    var requestOptions: { [key: string]: string } = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `${apiURL}/freeme/getSpecificStatementOfWork?uuid=${sessionStorage.getItem(
        "uuid"
      )}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setJobs(result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getCurrentJobs();
  }, []);

  return (
    <div className="FRE__StatementOfWork__Left">
      <h2>Current Jobs</h2>

      {jobs !== null ? (
        jobs.length !== 0 ? (
          jobs.map((job: ISOW) => {
            return (
              <SOWLeftSwitcher
                jobData={job}
                setActiveSow={setActiveSow}
                key={crypto.randomUUID()}
              />
            );
          })
        ) : (
          <h3>No Current Jobs</h3>
        )
      ) : (
        <h3>Loading...</h3>
      )}

      {sessionStorage.getItem("type") === "client" ? (
        <SOWLeftCreateSOW />
      ) : null}
    </div>
  );
}

interface ISOWLeftSwitcherProps {
  jobData: ISOW;
  setActiveSow: (item: ISOW) => void;
}

function SOWLeftSwitcher({ jobData, setActiveSow }: ISOWLeftSwitcherProps) {
  return (
    <p
      onClick={() => {
        setActiveSow(jobData);
      }}
      className="FRE__StatementOfWork__Left__Switcher"
    >
      - {jobData.name}
    </p>
  );
}

function SOWLeftCreateSOW({}) {
  const [creatingSOW, setCreatingSOW] = useState<boolean>(false);

  let clickedCreateSOWButton = () => {
    setCreatingSOW(creatingSOW ? false : true);
  };

  return (
    <>
      <p
        className="FRE__StatementOfWork__Left__CreateSOW FRE__StatementOfWork__Left__Switcher"
        onClick={() => {
          clickedCreateSOWButton();
        }}
      >
        <i className="fa-solid fa-plus"></i> Create Statement of Work
      </p>

      {creatingSOW ? (
        <SOWLeftCreateSOWModal setCreatingSOW={setCreatingSOW} />
      ) : null}
    </>
  );
}

interface ISOWLeftCreateSOWModalProps {
  setCreatingSOW: (creatingSOW: boolean) => void;
}

function SOWLeftCreateSOWModal({
  setCreatingSOW,
}: ISOWLeftCreateSOWModalProps) {
  let [showTaskModal, setShowTaskModal] = useState<boolean>();
  let [tasks, setTasks] = useState<ISOWAddTask[]>([]);

  const sowName = useRef(null);
  const consultantEmail = useRef(null);
  const sowDescription = useRef(null);

  let closeModal = () => {
    setCreatingSOW(false);
  };

  let handleCreateNewTask = () => {
    setShowTaskModal(showTaskModal ? false : true);
  };

  const refreshPage = () => {
    window.location.reload();
  };

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let initData = {
      sowName: (sowName.current as any).value,
      consultantEmail: (consultantEmail.current as any).value,
      sowDescription: (sowDescription.current as any).value,
    };

    if (tasks.length === 0) {
      return alert(
        "You need to create a Statement of work with Tasks. Please add one"
      );
    }

    // Create the timeline
    const timeline: any = JSON.parse(JSON.stringify(tasks));

    timeline.map((task: any) => {
      delete task["clientConfirmed"];
      delete task["consultantConfirmed"];
    });

    console.log(tasks);
    console.log(timeline);

    // Post request to create the statement of work
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      name: initData.sowName,
      description: initData.sowDescription,
      clientEmail: sessionStorage.getItem("email"),
      consultantEmail: initData.consultantEmail,
      tasks: tasks,
      timeline: timeline,
    });

    var requestOptions: RequestInit = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:3000/freeme/createStatementOfWork", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.default === "Statement of work created") {
          alert(result.detail);
          refreshPage();
        } else {
          alert(result.detail);
        }
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="FRE__StatementOfWork__Left__CreateSOW__Backdrop">
      <div className="FRE__StatementOfWork__Left__CreateSOW__Modal">
        <button
          onClick={() => {
            closeModal();
          }}
          className="FRE__StatementOfWork__Left__CreateSOW__Modal__Close"
        >
          <i className="fa-solid fa-x"></i>
        </button>

        <form
          className="FRE__StatementOfWork__Left__CreateSOW__Modal__Form"
          onSubmit={submitForm}
        >
          <h1>Create Statement of Work</h1>
          <div className="FRE__StatementOfWork__Left__CreateSOW__Modal__Form__BasicData">
            <section>
              <div>
                <label htmlFor="">Statement of work name</label>
                <input
                  type="text"
                  placeholder="Enter Statement of work name"
                  ref={sowName}
                  required
                />
              </div>

              <div>
                <label htmlFor="">Consultant email</label>
                <input
                  type="text"
                  placeholder="Enter consultant email"
                  ref={consultantEmail}
                  required
                />
              </div>
            </section>

            <div>
              <label htmlFor="">Description</label>
              <textarea
                placeholder="Enter your description"
                ref={sowDescription}
                required
              ></textarea>
            </div>
          </div>

          <div className="FRE__StatementOfWork__Left__CreateSOW__Modal__Form__Table">
            <div className="FRE__StatementOfWork__Centre__Table__NotConfirmed__Title">
              <p>NR</p>
              <p>Task Description</p>
              <p>Amount</p>
              <p>Client Confirmed</p>
              <p>Consultant Confirmed</p>
            </div>
            <div className="FRE__StatementOfWork__Left__Rows">
              {tasks?.map((task) => {
                return (
                  <SOWLeftCreateSOWModalTableRows
                    task={task}
                    key={crypto.randomUUID()}
                  />
                );
              })}
            </div>

            <div className="FRE__StatementOfWork__Centre__Table__NotConfirmed__Row">
              <div
                className="FRE__StatementOfWork__Left__CreateSOW__Modal__Form__Table__AddTask"
                onClick={() => {
                  handleCreateNewTask();
                }}
              >
                <span>+</span> Add Task
              </div>
            </div>
            <div className="FRE__StatementOfWork__Left__CreateSOW__Modal__Form__Table__Send">
              <button type="submit">Send</button>
            </div>
          </div>
        </form>
      </div>

      {showTaskModal ? (
        <SOWLeftCreateSOWModalAddTask
          setShowTaskModal={setShowTaskModal}
          tasks={tasks}
          setTasks={setTasks}
        />
      ) : null}
    </div>
  );
}

interface ISOWLeftCreateSOWModalTableRowsProps {
  task: ISOWAddTask;
}

function SOWLeftCreateSOWModalTableRows({
  task,
}: ISOWLeftCreateSOWModalTableRowsProps) {
  return (
    <div className="FRE__StatementOfWork__Left__Row">
      <p>{task.id}</p>
      <p>{task.jobDescription}</p>
      <p>{task.amount}</p>
      <p>
        <input type="checkbox" disabled />
      </p>
      <p>
        <input type="checkbox" disabled />
      </p>
    </div>
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
