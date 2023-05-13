export interface IProfileData {
  username: string;
  profilePicture: string;
  muted: boolean;
}

export interface ISmallChat {
  profilePicture: string;
  username: string;
  receiving: boolean;
  lastMessage: string;
  muted: boolean;
  setActiveChat: (data: IProfileData) => void;
}

export interface IBigChat {
  isActive: boolean;
  data: IProfileData;
}
