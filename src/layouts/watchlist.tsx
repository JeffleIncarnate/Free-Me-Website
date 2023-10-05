import Navbar from "../components/navbar/navbar";
import Watchlist from "../components/watchlist/watchlist";
import Switcher from "../components/switcher/switcher";
import AnimatedPage from "../components/animatedPage/animatedPage";

export default function WatchlistPage() {
  return (
    <AnimatedPage>
      <Navbar />
      <Switcher />
      <Watchlist />
    </AnimatedPage>
  );
}
