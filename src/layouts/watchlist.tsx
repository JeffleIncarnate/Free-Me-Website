import Navbar from "../components/navbar/navbar";
import Watchlist from "../components/watchlist/watchlist";
import Switcher from "../components/switcher/switcher";

export default function WatchlistPage() {
  return (
    <>
      <Navbar />
      <Switcher />
      <Watchlist />
    </>
  );
}
