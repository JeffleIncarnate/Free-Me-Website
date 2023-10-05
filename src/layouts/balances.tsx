import Balances from "../components/balances/balances";
import Navbar from "../components/navbar/navbar";
import Switcher from "../components/switcher/switcher";
import AnimatedPage from "../components/animatedPage/animatedPage";

export default function BalancesPages() {
  return (
    <AnimatedPage>
      <Navbar />
      <Switcher />
      <Balances />
    </AnimatedPage>
  );
}
