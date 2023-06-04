export interface ISOW {
  agreed: { client: boolean; consultant: boolean };
  client: string;
  consultant: string;
  description: string;
  name: string;
  tasks: ISOWTableRows[];
  timeline: [{}];
  uuid: string;
}

export interface ISOWTableRows {
  clientConfirmed: boolean;
  consultantConfirmed: boolean;
  description: string;
  relativeFinishDate: number;
  amount: number;
}
