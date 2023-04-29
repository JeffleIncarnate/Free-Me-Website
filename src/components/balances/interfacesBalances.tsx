export interface IBalancesTransactionsButton {
  text: string;
  mounyOut: boolean;
}

export interface ITransactionDetails {
  title: string;
  moneyOut: boolean;
  date: number;
  from: string;
  to: string;
  description: string;
}

export interface IBalancesIncomingAndOutgoings {
  text: string;
  amount: number;
}
