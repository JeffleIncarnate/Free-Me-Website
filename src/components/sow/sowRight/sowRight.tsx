import "./sowRight.css";

import { ISOW, ISOWTimeline } from "../sowInterface";

interface IProps {
  activeSow: ISOW | null;
}

export default function SOWRight({ activeSow }: IProps) {
  console.log(activeSow?.timeline);
  return (
    <div className="FRE__StatementOfWork__Right">
      <h2>Timeline</h2>

      {activeSow !== null ? (
        <SOWRightShowTimeline timeline={activeSow?.timeline} />
      ) : (
        <SOWRightNoShowTimeline />
      )}
    </div>
  );
}

function SOWRightShowTimeline({
  timeline,
}: {
  [key: string]: ISOWTimeline[] | null;
}) {
  return (
    <div className="FRE__StatementOfWork__Right__Timeline">
      {timeline?.length === 0 ? null : (
        <>
          {" "}
          <div className="FRE__StatementOfWork__Right__Timeline__Line"></div>
          <div className="FRE__StatementOfWork__Right__Timeline__Times">
            {timeline?.map((time: ISOWTimeline, index: number) => {
              return (
                <SOWRightShowTime
                  index={index}
                  description={time.description}
                  day={time.relativeFinishDate}
                  amount={time.amount}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

interface ISOWRightShowTimeProps {
  index: number;
  description: string;
  day: number;
  amount: number;
}

function SOWRightShowTime({
  index,
  description,
  day,
  amount,
}: ISOWRightShowTimeProps) {
  return (
    <div className="FRE__StatementOfWork__Right__Timeline__Time">
      <h3>Task: {index + 1}</h3>
      <p>
        <strong>Description:</strong> {description}
      </p>
      <p>
        <strong>Amount:</strong> {amount}
      </p>
      <p>
        <strong>Expected Finish Date:</strong>{" "}
        {`${new Date(day * 1000).toLocaleDateString("en-nz")}`}
      </p>
    </div>
  );
}

function SOWRightNoShowTimeline() {
  return null;
}
