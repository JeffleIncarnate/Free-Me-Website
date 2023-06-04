import "./sowCentre.css";

import { ISOW, ISOWTableRows } from "../sowInterface";

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

function SOWCentreActiveSOW({ activeSow }: IProps) {
  return (
    <>
      <div className="FRE__StatementOfWork__Centre__JobTitle">
        <h1>{activeSow?.name}</h1>
      </div>

      <div className="FRE__StatementOfWork__Centre__JobDescription">
        <p>
          <strong>Description:</strong> {activeSow?.description}
        </p>
      </div>

      <div className="FRE__StatementOfWork__Centre__JobEmails">
        <p>
          <strong>Client Email:</strong> {activeSow?.client}
        </p>
        <p>
          <strong>Consultant Email:</strong> {activeSow?.consultant}
        </p>
      </div>

      <div className="FRE__StatementOfWork__Centre__Table">
        <SOWCentreActiveSOWTable
          client={activeSow?.agreed.client}
          consultant={activeSow?.agreed.consultant}
          rows={activeSow?.tasks}
        />
      </div>

      <div className="FRE__StatementOfWork__Centre__Buttons"></div>
    </>
  );
}

interface ISOWCentreActiveSOWTableProps {
  client: boolean | undefined;
  consultant: boolean | undefined;
  rows: ISOWTableRows[] | undefined;
}

function SOWCentreActiveSOWTable({
  client,
  consultant,
  rows,
}: ISOWCentreActiveSOWTableProps) {
  return (
    <>
      {client === true && consultant === true ? (
        <SOWCentreActiveSOWTableConfirmed rows={rows} />
      ) : (
        <SOWCentreActiveSOWTableNotConfirmed rows={rows} />
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
            <SOWCentreActiveSOWTableConfirmedRow row={row} index={index} />
          );
        })}
      </div>
    </div>
  );
}

interface ISOWCentreActiveSOWTableNotConfirmedRowProps {
  row: ISOWTableRows;
  index: number;
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
        <strong>Description:</strong> {row.description}
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

function SOWCentreActiveSOWTableNotConfirmed({
  rows,
}: {
  [key: string]: ISOWTableRows[] | undefined;
}) {
  console.log(rows);

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
        {rows?.map((row: ISOWTableRows, index: number) => {
          return (
            <SOWCentreActiveSOWTableNotConfirmedRow row={row} index={index} />
          );
        })}
      </div>

      <div className="FRE__StatementOfWork__Centre__Table__NotConfirmed__AddTask">
        <SOWCentreActiveSOWTableAddTask />
      </div>

      <div className="FRE__StatementOfWork__Centre__Table__NotConfirmed__Buttons">
        <SOWCentreActiveSOWButtons />
      </div>
    </div>
  );
}

function SOWCentreActiveSOWTableNotConfirmedRow({
  row,
  index,
}: ISOWCentreActiveSOWTableNotConfirmedRowProps) {
  return (
    <div className="FRE__StatementOfWork__Centre__Table__NotConfirmed__Row">
      <p>{index + 1}</p>
      <p>{row.description}</p>
      <p>{row.amount}</p>
      <p>
        <input type="checkbox" name="" id="" />
      </p>
      <p>
        <input type="checkbox" name="" id="" />
      </p>
    </div>
  );
}

function SOWCentreActiveSOWTableAddTask() {
  return (
    <button>
      <span>+</span> Add Task
    </button>
  );
}

function SOWCentreActiveSOWButtons() {
  return (
    <>
      {sessionStorage.getItem("type") === "client" ? (
        <button>Send</button>
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
