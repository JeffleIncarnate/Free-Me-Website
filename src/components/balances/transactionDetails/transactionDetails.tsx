import "./transactionDetails.css";

import { ITransactionDetails } from "../interfacesBalances";

export default function BalancesTransactionDetails({
  transactionDetails,
}: {
  [key: string]: ITransactionDetails | null;
}) {
  return (
    <main className="FRE__Balances__TransactionDetails">
      {transactionDetails !== null ? (
        <>
          <h2>Transaction Details</h2>

          <div className="FRE__Balances__TransactionDetails-Flex">
            <div>
              <h3>Tile: </h3>
              <p>{transactionDetails.title}</p>
            </div>
            <div>
              <h3>Type: </h3>
              <p>{transactionDetails.moneyOut ? "Money Out" : "Money In"}</p>
            </div>
            <div>
              <h3>Date: </h3>
              <p>{transactionDetails.date}</p>
            </div>
            <div>
              <h3>From: </h3>
              <p>{transactionDetails.from}</p>
            </div>
            <div>
              <h3>To: </h3>
              <p>{transactionDetails.to}</p>
            </div>
            <div>
              <h3>Description: </h3>
              <p>{transactionDetails.description}</p>
            </div>
          </div>
        </>
      ) : (
        <p>Br</p>
      )}
    </main>
  );
}
