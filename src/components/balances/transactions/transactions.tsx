import "./transactions.css";

import { ITransaction, ITransactionDetails } from "../interfacesBalances";

export default function BalancesTransactions({
  textArrayOfObjects,
  setTransactionDetails,
}: ITransaction) {
  return (
    <main className="FRE__Balances__Transactions">
      <h2>Transactions</h2>

      {textArrayOfObjects.map((item: ITransactionDetails) => {
        return (
          <BalancesTransactionsButton
            title={item.title}
            moneyOut={item.moneyOut}
            date={item.date}
            from={item.from}
            to={item.to}
            description={item.description}
            setTransactionDetails={setTransactionDetails}
            key={crypto.randomUUID()}
          />
        );
      })}
    </main>
  );
}

export function BalancesTransactionsButton({
  title,
  moneyOut,
  date,
  from,
  to,
  description,
  setTransactionDetails,
}: ITransactionDetails) {
  return (
    // If true, text will be red, else will be green
    <button
      className="FRE__Balances__Transactions__Button"
      style={{ color: moneyOut === true ? "#FAA0A0" : "#C1E1C1" }}
      onClick={() => {
        setTransactionDetails({
          title: title,
          moneyOut: moneyOut,
          date: date,
          from: from,
          to: to,
          description: description,
          setTransactionDetails: setTransactionDetails,
        });
      }}
    >
      - {title}
      {moneyOut === true ? (
        <i className="fa-solid fa-arrow-down"></i>
      ) : (
        <i className="fa-solid fa-arrow-up"></i>
      )}
    </button>
  );
}
