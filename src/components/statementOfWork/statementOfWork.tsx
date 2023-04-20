import "./statementOfWork.css";

import { useEffect, useState } from "react";
import CreateSOWButton from "./CreateSOWButton/createSOWButton";
import CreateSOWForm from "./CreateSOWForm/createSOWForm";

export interface IActiveSOW {
  uuid: string | null;
  jobTitle: string | null;
  client: string | null;
  cosultant: string | null;
  tasks: [{}] | null;
  createSOW: boolean;
  clientConfirm: boolean | null;
  consultantConfirm: boolean | null;
}

export default function StatementOfWork() {
  const [activeSow, setActiveSow] = useState<IActiveSOW>({
    uuid: null,
    jobTitle: null,
    client: null,
    cosultant: null,
    tasks: null,
    createSOW: false,
    clientConfirm: null,
    consultantConfirm: null,
  });

  const [sow, setSow] = useState();
  const [shouldCheckSOW, setShouldCheckSOW] = useState(false);

  let getData = () => {
    var requestOptions: any = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `http://localhost:3000/freeme/getSpecificStatementOfWork?uuid=${sessionStorage.getItem(
        "uuid"
      )}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setSow(result);
        setShouldCheckSOW(true);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <main className="FRE__Main-StatementOfWork">
      <div className="FRE__Main-StatementOfWork__Cur__Jobs">
        <h2>Current Jobs</h2>

        {shouldCheckSOW === true ? (
          <>
            {(sow as any).map((x: any) => {
              return (
                <StatementOfWorkSwicher
                  key={crypto.randomUUID()}
                  data={x}
                  setActiveSow={setActiveSow}
                />
              );
            })}

            {(sow as any).length === 0 ? (
              <h3
                style={{
                  marginTop: "2rem",
                  fontSize: "2rem",
                  textAlign: "center",
                }}
              >
                No statements to be found
              </h3>
            ) : null}
          </>
        ) : (
          <h1>Loading...</h1>
        )}

        {sessionStorage.getItem("type") === "client" ? (
          <CreateSOWButton setActiveSow={setActiveSow} />
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
                    <strong>Consultant name: </strong>
                    {props.data.cosultant}
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

                {props.data.tasks.map((x: any, index: any) => {
                  return (
                    <StatementOfWorkRow
                      key={crypto.randomUUID()}
                      id={index + 1}
                      description={x.jobDescription}
                      amount={x.amount}
                    />
                  );
                })}

                {props.data.consultantConfirm === false &&
                sessionStorage.getItem("type") === "client" ? (
                  <h3 style={{ position: "relative", top: "2rem" }}>
                    Consultant has not yet confirmed this SOW
                  </h3>
                ) : null}
              </div>
              <div className="FRE__Main-StatementOfWork__Job-Buttons">
                {(() => {
                  if (
                    sessionStorage.getItem("type") === "consultant" &&
                    props.data.consultantConfirm === false
                  ) {
                    return (
                      <>
                        <button>Edit</button>
                        <button>Confirm</button>
                      </>
                    );
                  } else if (sessionStorage.getItem("type") === "client") {
                    return <button>Send</button>;
                  }
                })()}

                {/* {sessionStorage.getItem("type") === "consultant" &&
                props.data.consultantConfirm === false ? (
                  <>
                    <button>Edit</button>
                    <button>Confirm</button>
                  </>
                ) : null} */}
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
        props.setActiveSow({
          uuid: props.data.uuid,
          jobTitle: props.data.name,
          client: props.data.client,
          cosultant: props.data.consultant,
          tasks: props.data.tasks,
          createSOW: false,
          clientConfirm: props.data.agreed.client,
          consultantConfirm: props.data.agreed.consultant,
        });
      }}
    >
      - {props.data.name}
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
