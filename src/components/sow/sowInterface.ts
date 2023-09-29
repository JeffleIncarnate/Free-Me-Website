export interface ISOW {
  agreed: { client: boolean; consultant: boolean };
  client: string;
  consultant: string;
  description: string;
  name: string;
  tasks: ISOWTableRows[];
  timeline: ISOWTimeline[];
  uuid: string;
  consultantemail: string;
  clientemail: string;
}

export interface ISOWTimeline {
  jobDescription: string;
  relativeFinishDate: number;
  amount: number;
}

export interface ISOWTableRows {
  clientConfirmed: boolean;
  consultantConfirmed: boolean;
  jobDescription: string;
  relativeFinishDate: number;
  amount: number;
  id: number;
}

export interface ISOWAddTask {
  id: number;
  jobDescription: string;
  amount: number;
  relativeFinishDate: number;
  clientConfirmed: boolean;
  consultantConfirmed: boolean;
}

export interface ISOWTimelineId {
  id: number;
  jobDescription: string;
  amount: number;
  relativeFinishDate: number;
}
