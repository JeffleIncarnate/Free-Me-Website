import { refreshRequest } from "../requests/refreshRequest";

type SuccessResponse = {
  success: true;
  accessToken: string;
  refreshToken: string;
};

type ErrorResponse = {
  success: false;
};

async function initialReducer(): Promise<SuccessResponse | ErrorResponse> {
  let refreshToken = localStorage.getItem("refreshToken");

  if (refreshToken === null) {
    return {
      success: false,
    };
  }

  const response = await refreshRequest(refreshToken);

  if (!response.success) {
    return {
      success: false,
    };
  }

  return {
    success: true,
    accessToken: response.accessToken,
    refreshToken: response.refreshToken,
  };
}

export { initialReducer };
