import { instance } from ".";

export const getPostAuthorData = (userId: string, token: string) => {
  return instance.get(`/v2/api/post/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
