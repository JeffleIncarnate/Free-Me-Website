export type Post = {
  postId: string;
  postText: string;
  postImages: string[];
  likes: string[];
  userId: string;
  postTime: Date;
};

export type SuccessTypeClient = {
  id: string;
  firstname: string;
  lastname: string;
  password: string;
  email: string;
  phonenumber: string;
  type: "CONSULTANT" | "CLIENT" | "FREERIDER";
  dateOfBirth: string;
  address: string;
  nzbn: string;
  gst: string;
  role: "ADMIN" | "GENERAL";
  createdAt: Date;
  profilePicture: string;
  banner: string;
  background: string;
  followers: string[];
  following: string[];
  connections: string[];
  consultantProfile: {
    id: number;
    description: string;
    location: string;
    tier: string;
    values: string[];
    skills: string[];
    education: string[];
    ambitions: string[];
    awards: string[];
    hobbies: string[];
    timeline: object;
    userId: string;
  };
  post: Post[] | null;
};

export type SuccessTypeConsultant = {
  id: string;
  firstname: string;
  lastname: string;
  password: string;
  email: string;
  phonenumber: string;
  type: "CONSULTANT" | "CLIENT" | "FREERIDER";
  dateOfBirth: string;
  address: string;
  nzbn: string;
  gst: string;
  role: "ADMIN" | "GENERAL";
  createdAt: Date;
  profilePicture: string;
  banner: string;
  background: string;
  followers: string[];
  following: string[];
  connections: string[];
  consultantProfile: {
    id: number;
    description: string;
    location: string;
    tier: string;
    values: string[];
    skills: string[];
    education: string[];
    ambitions: string[];
    awards: string[];
    hobbies: string[];
    timeline: object;
    userId: string;
  };
  post: Post[] | null;
};

// Union Type
export type User = SuccessTypeClient | SuccessTypeConsultant;
