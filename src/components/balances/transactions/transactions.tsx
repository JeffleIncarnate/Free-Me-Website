import "./transactions.css";

import { IBalancesTransactionsButton } from "../interfacesBalances";

export default function BalancesTransactions({
  textArrayOfObjects,
}: {
  [key: string]: IBalancesTransactionsButton[];
}) {
  return (
    <main className="FRE__Balances__Transactions">
      <h2>Transactions</h2>

      {textArrayOfObjects.map((item: IBalancesTransactionsButton) => {
        return (
          <BalancesTransactionsButton
            text={item.text}
            mounyOut={item.mounyOut}
            key={crypto.randomUUID()}
          />
        );
      })}
    </main>
  );
}

export function BalancesTransactionsButton({
  text,
  mounyOut,
}: IBalancesTransactionsButton) {
  return (
    // If true, text will be red, else will be green
    <button
      className="FRE__Balances__Transactions__Button"
      style={{ color: mounyOut === true ? "#FAA0A0" : "#C1E1C1" }}
      onClick={() => {
        alert("e");
      }}
    >
      - {text}
      {mounyOut === true ? (
        <i className="fa-solid fa-arrow-down"></i>
      ) : (
        <i className="fa-solid fa-arrow-up"></i>
      )}
    </button>
  );
}
