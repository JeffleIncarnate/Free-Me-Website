import "./balances.css";

import { useState } from "react";

import BalancesTransactions from "./transactions/transactions";
import BalancesTransactionDetails from "./transactionDetails/transactionDetails";
import BalancesIncomingAndOutgoings from "./incomingAndOutgoings/incomingAndOutgoings";

import {
  IBalancesTransactionsButton,
  ITransactionDetails,
  IBalancesIncomingAndOutgoings,
} from "./interfacesBalances";

export default function Balances(props: any) {
  let BalancesTransactionsButtonsTest: IBalancesTransactionsButton[] = [
    {
      text: "Job Payment",
      mounyOut: false,
    },
    {
      text: "Job Payment Deductions",
      mounyOut: true,
    },
    {
      text: "Community Network Payment",
      mounyOut: false,
    },
    {
      text: "FreeMe Subscription",
      mounyOut: true,
    },
    {
      text: "Job Payment",
      mounyOut: false,
    },
    {
      text: "Job Payment Deductions",
      mounyOut: true,
    },
  ];

  let BalancesTransactionDetailsTest: ITransactionDetails = {
    title: "FreeMe Subscription",
    moneyOut: true,
    date: 1682729455,
    from: "Consultant Balance",
    to: "FreeMe Subscription",
    description: "FreeMe Subscription",
  };

  let BalancesIncomingAndOutgoingsTest: IBalancesIncomingAndOutgoings[] = [
    {
      text: "GST",
      amount: 100,
    },
    {
      text: "Tax",
      amount: 6969,
    },
    {
      text: "Hliday Pay",
      amount: 265,
    },
    {
      text: "Community Network",
      amount: 934,
    },
    {
      text: "Acc Levy",
      amount: 198273,
    },
    {
      text: "Holiday Account",
      amount: 1387,
    },
  ];

  const [transactionDetails, setTransactionDetails] =
    useState<ITransactionDetails | null>(null);

  return (
    <main className="FRE__Balances">
      <BalancesTransactions
        textArrayOfObjects={BalancesTransactionsButtonsTest}
      />
      <BalancesTransactionDetails
        transactionDetails={BalancesTransactionDetailsTest}
      />
      <BalancesIncomingAndOutgoings
        itemsToDisplay={BalancesIncomingAndOutgoingsTest}
      />
    </main>
  );
}
