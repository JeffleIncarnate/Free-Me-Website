import "./sowLeft.css";

import { useEffect, useState, useRef } from "react";
import { ISOW, ISOWAddTask } from "../sowInterface";

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
      `https://free-me-api.vercel.app/freeme/getSpecificStatementOfWork?uuid=${sessionStorage.getItem(
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
  });

  return (
    <div className="FRE__StatementOfWork__Left">
      <h2>Current Jobs</h2>

      {jobs !== null ? (
        jobs.map((job: ISOW) => {
          return <SOWLeftSwitcher jobData={job} setActiveSow={setActiveSow} />;
        })
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

  let closeModal = () => {
    setCreatingSOW(false);
  };

  let handleCreateNewTask = () => {
    setShowTaskModal(showTaskModal ? false : true);
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
          X
        </button>

        <form className="FRE__StatementOfWork__Left__CreateSOW__Modal__Form">
          <h1>Create Statement of Work</h1>
          <div className="FRE__StatementOfWork__Left__CreateSOW__Modal__Form__BasicData">
            <section>
              <div>
                <label htmlFor="">Statement of work name</label>
                <input type="text" placeholder="Enter Statement of work name" />
              </div>

              <div>
                <label htmlFor="">Consultant email</label>
                <input type="text" placeholder="Enter consultant email" />
              </div>
            </section>

            <div>
              <label htmlFor="">Description</label>
              <textarea placeholder="Enter your description"></textarea>
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
                return <SOWLeftCreateSOWModalTableRows task={task} />;
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
              <button type="button">Send</button>
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
        <input type="checkbox" />
      </p>
      <p>
        <input type="checkbox" />
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
          X
        </button>

        <form
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            closeModal();
            let data: ISOWAddTask = {
              id: tasks.length + 1,
              jobDescription: (taskDescription.current! as any).value,
              amount: (amount.current! as any).value,
              finishDay: (finishDay.current! as any).value,
            };

            let newTasksList = [...tasks];

            newTasksList.push(data);

            setTasks(newTasksList);
            console.log(tasks);
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
                />
              </div>

              <div>
                <label htmlFor="">Finish Day</label>
                <input type="date" ref={finishDay} />
              </div>
            </section>

            <div>
              <label htmlFor="">Task Description</label>
              <textarea
                ref={taskDescription}
                placeholder="Enter your task description"
              ></textarea>
            </div>
          </div>

          <button>Add Task</button>
        </form>
      </div>
    </div>
  );
}
