import "./jobs.css";

import { IWatchList } from "../watchListInterface";
import { ISOW } from "../../sow/sowInterface";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { apiURL } from "../../../core/data";

export default function WatchlistJobs() {
  const navigate = useNavigate();

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
      .then((result) => {
        setJobs(result);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getCurrentJobs();
  }, []);

  return (
    <div
      className="FRE__Watchlist__Jobs"
      onClick={() => {
        navigate("/sow");
      }}
    >
      <h2>Jobs</h2>

      <ul>
        {jobs !== null ? (
          jobs.length !== 0 ? (
            jobs.map((job: ISOW) => {
              return <WatchListJobsButton jobName={job.name} />;
            })
          ) : (
            <h3>No Current Jobs</h3>
          )
        ) : (
          <h3>Loading...</h3>
        )}
      </ul>
    </div>
  );
}

function WatchListJobsButton({
  companyName,
  jobName,
}: {
  [key: string]: string;
}) {
  return (
    <button className="FRE__Watchlist__Jobs__Button">
      <strong>{companyName}</strong> -- {jobName}
    </button>
  );
}
