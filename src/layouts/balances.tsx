import Balances from "../components/balances/balances";
import Navbar from "../components/navbar/navbar";
import Switcher from "../components/switcher/switcher";

export default function BalancesPages() {
  return (
    <>
      <Navbar />
      <Switcher />
      <Balances />
    </>
  );
}
