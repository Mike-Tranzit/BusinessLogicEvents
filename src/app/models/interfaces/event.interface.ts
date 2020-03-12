export interface IEventData {
  eventName: string;
  userName: string;
  dateOfAction: Date;
}

export interface IEventInputData {
  data: IEventData;
}
