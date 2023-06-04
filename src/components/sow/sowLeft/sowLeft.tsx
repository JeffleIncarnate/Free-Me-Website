import "./sowLeft.css";

import { useEffect, useState } from "react";
import { ISOW } from "../sowInterface";

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
      `http://localhost:3000/freeme/getSpecificStatementOfWork?uuid=${sessionStorage.getItem(
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
  return (
    <p className="FRE__StatementOfWork__Left__CreateSOW FRE__StatementOfWork__Left__Switcher">
      <i className="fa-solid fa-plus"></i> Create Statement of Work
    </p>
  );
}
