import "./watchlist.css";

import WatchlistJobs from "./jobs/jobs";
import WatchlistFollowing from "./following/following";
import WatchlistAdvertisment from "./advertisment/advertisment";

import { IWatchList } from "./watchListInterface";

export default function Watchlist() {
  let jobs: IWatchList[] = [
    {
      companyNane: "Dhruv Banking",
      jobName: "Software Engineer Positon",
    },
    {
      companyNane: "GoDaddy",
      jobName: "Graphic Design Position",
    },
    {
      companyNane: "FreeMe",
      jobName: "Business Analyst",
    },
    {
      companyNane: "Untitled Chat App",
      jobName: "Encryption Specialist",
    },
    {
      companyNane: "Dhruv Social",
      jobName: "Trends Analyst",
    },
  ];

  return (
    <main className="FRE__Watchlist">
      <WatchlistJobs jobs={jobs} />
      <WatchlistFollowing />
      <WatchlistAdvertisment />
    </main>
  );
}
