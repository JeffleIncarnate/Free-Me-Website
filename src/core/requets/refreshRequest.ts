import { instance, STATUS_CODES } from ".";

interface SuccessResponse {
  accessToken: string;
  refreshToken: string;
}

export const refreshToken = async (
  refreshToken: string
): Promise<SuccessResponse | undefined> => {
  let res;

  try {
    res = await instance.post("/v2/api/auth/refresh", {
      refreshToken,
    });
  } catch (err) {
    return undefined;
  }

  if (res.status !== STATUS_CODES.OK) {
    localStorage.clear();
    sessionStorage.clear();

    return undefined;
  }

  sessionStorage.setItem("accessToken", res.data.accessToken);
  localStorage.setItem("refreshToken", res.data.refreshToken);

  return {
    accessToken: res.data.accessToken,
    refreshToken: res.data.refreshToken,
  };
};
