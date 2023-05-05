export interface IBalancesTransactionsButton {
  text: string;
  mounyOut: boolean;
  setTransactionDetails: (item: ITransactionDetails) => void;
}

export interface ITransactionDetails {
  title: string;
  moneyOut: boolean;
  date: number;
  from: string;
  to: string;
  description: string;
  setTransactionDetails: (item: ITransactionDetails) => void;
}

export interface IBalancesIncomingAndOutgoings {
  text: string;
  amount: number;
}

export interface ITransaction {
  textArrayOfObjects: ITransactionDetails[];
  setTransactionDetails: (item: ITransactionDetails | null) => void;
}
