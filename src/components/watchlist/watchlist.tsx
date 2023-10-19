import "./watchlist.css";

import WatchlistJobs from "./jobs/jobs";
import WatchlistFollowing from "./following/following";
import WatchlistAdvertisment from "./advertisment/advertisment";

export default function Watchlist() {
  return (
    <main className="FRE__Watchlist">
      <WatchlistJobs />
      <WatchlistFollowing />
      <WatchlistAdvertisment />
    </main>
  );
}
