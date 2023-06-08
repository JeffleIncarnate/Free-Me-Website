export interface ISOW {
  agreed: { client: boolean; consultant: boolean };
  client: string;
  consultant: string;
  description: string;
  name: string;
  tasks: ISOWTableRows[];
  timeline: ISOWTimeline[];
  uuid: string;
}

export interface ISOWTimeline {
  description: string;
  relativeFinishDate: number;
  amount: number;
}

export interface ISOWTableRows {
  clientConfirmed: boolean;
  consultantConfirmed: boolean;
  description: string;
  relativeFinishDate: number;
  amount: number;
}

export interface ISOWAddTask {
  id: number;
  jobDescription: string;
  amount: number;
  finishDay: number;
}
