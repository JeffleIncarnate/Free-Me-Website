export interface ISOW {
  agreed: { [key: string]: boolean };
  client: string;
  consultant: string;
  description: string;
  name: string;
  tasks: [{}];
  timeline: [{}];
  uuid: string;
}
