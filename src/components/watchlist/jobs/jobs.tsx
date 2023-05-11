import "./jobs.css";

import { IWatchList } from "../watchListInterface";

export default function WatchlistJobs({
  jobs,
}: {
  [key: string]: IWatchList[];
}) {
  return (
    <div className="FRE__Watchlist__Jobs">
      <h2>Jobs</h2>

      <ul>
        {jobs.map((job: IWatchList) => {
          return (
            <WatchListJobsButton
              companyName={job.companyNane}
              jobName={job.jobName}
            />
          );
        })}
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
