import { refreshToken } from "../requets/refreshRequest";

interface SuccessResponse {
  accessToken: string;
  refreshToken: string;
}

export async function initialReducer(): Promise<SuccessResponse | undefined> {
  let token = localStorage.getItem("refreshToken");

  if (token === null) {
    return undefined;
  }

  const response = await refreshToken(token);

  if (!response) {
    return undefined;
  }

  return {
    accessToken: response.accessToken,
    refreshToken: response.refreshToken,
  };
}
