import "./incomingAndOutgoings.css";

import { IBalancesIncomingAndOutgoings } from "../interfacesBalances";

export default function BalancesIncomingAndOutgoings({
  itemsToDisplay,
}: {
  [key: string]: IBalancesIncomingAndOutgoings[];
}) {
  return (
    <main className="FRE__Balances__IncomingAndOutgoings">
      <h2>Total incoming and outgoings</h2>

      {itemsToDisplay.map((item: IBalancesIncomingAndOutgoings) => {
        return (
          <BalancesIncomingAndOutgoingsText
            text={item.text}
            amount={item.amount}
          />
        );
      })}
    </main>
  );
}

export function BalancesIncomingAndOutgoingsText({
  text,
  amount,
}: {
  [key: string]: string | number;
}) {
  let toDisplay = `- ${text}: ${amount}`;

  return <p>{toDisplay}</p>;
}
