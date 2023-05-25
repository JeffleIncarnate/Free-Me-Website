export interface ISocialMediaLeftButtons {
  friends: string;
  events: string;
  "Most Recent": string;
  groups: string;
  marketplace: string;
  watch: string;
  "See More": string;
}

export interface IRecentlyVisitedCompany {
  img: string;
  name: string;
}

export interface ISuggestedCompany {
  img: string;
  name: string;
  description: string;
}

export interface IAdvertisement {
  img: string;
  name: string;
}

export interface IPostButton {
  name: string;
  icon: string;
}

export interface IPost {
  name: string;
  time: string;
  profilePic: string;
  title: string;
  text: string;
  images: string[] | null;
  likes: number;
  comments: number;
}

export interface IPostProfile {
  name: string;
  time: string;
  profilePic: string;
  title: string;
}

export interface IPostBody {
  text: string;
  images: string[] | null;
}

export interface IPostAction {
  icon: string;
  name: string;
  number: number | null;
}
