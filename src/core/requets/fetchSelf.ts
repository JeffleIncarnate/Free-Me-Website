import { instance } from ".";

export const fetchSelf = (token: string) => {
  return instance.get("/v2/api/user/self", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
