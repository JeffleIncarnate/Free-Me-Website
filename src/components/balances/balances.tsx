import "./balances.css";

import { useState } from "react";

import BalancesTransactions from "./transactions/transactions";
import BalancesTransactionDetails from "./transactionDetails/transactionDetails";
import BalancesIncomingAndOutgoings from "./incomingAndOutgoings/incomingAndOutgoings";

import {
  ITransactionDetails,
  IBalancesIncomingAndOutgoings,
} from "./interfacesBalances";

export default function Balances() {
  const [transactionDetails, setTransactionDetails] =
    useState<ITransactionDetails | null>(null);

  let BalancesTransactionDetailsTest: ITransactionDetails[] = [
    {
      title: "Job Payment",
      moneyOut: true,
      date: 1682729455,
      from: "Consultant Balance",
      to: "FreeMe Subscription",
      description: "FreeMe Subscription",
      setTransactionDetails: setTransactionDetails,
    },
    {
      title: "Job Payment Deductions",
      moneyOut: false,
      date: 1682729455,
      from: "Consultant Balance",
      to: "FreeMe Subscription",
      description: "FreeMe Subscription",
      setTransactionDetails: setTransactionDetails,
    },
    {
      title: "Community Network Payout",
      moneyOut: true,
      date: 1682729455,
      from: "Consultant Balance",
      to: "FreeMe Subscription",
      description: "FreeMe Subscription",
      setTransactionDetails: setTransactionDetails,
    },
    {
      title: "FreeMe Subscription",
      moneyOut: false,
      date: 1682729455,
      from: "Consultant Balance",
      to: "FreeMe Subscription",
      description: "FreeMe Subscription",
      setTransactionDetails: setTransactionDetails,
    },
    {
      title: "Job Payment",
      moneyOut: true,
      date: 1682729455,
      from: "Consultant Balance",
      to: "FreeMe Subscription",
      description: "FreeMe Subscription",
      setTransactionDetails: setTransactionDetails,
    },
    {
      title: "Job Payment Deductions",
      moneyOut: false,
      date: 1682729455,
      from: "Consultant Balance",
      to: "FreeMe Subscription",
      description: "FreeMe Subscription",
      setTransactionDetails: setTransactionDetails,
    },
  ];

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
      text: "Holiday Pay",
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

  return (
    <main className="FRE__Balances">
      <BalancesTransactions
        textArrayOfObjects={BalancesTransactionDetailsTest}
        setTransactionDetails={setTransactionDetails}
      />
      <BalancesTransactionDetails transactionDetails={transactionDetails} />
      <BalancesIncomingAndOutgoings
        itemsToDisplay={BalancesIncomingAndOutgoingsTest}
      />
    </main>
  );
}
