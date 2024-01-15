import axios from "axios";

import { API_URL, STATUS_CODES } from ".";

type SuccessResponse = {
  success: true;
  accessToken: string;
  refreshToken: string;
};

type ErrorResponse = {
  success: false;
};

export async function refreshRequest(
  refreshToken: string
): Promise<SuccessResponse | ErrorResponse> {
  let res;

  try {
    res = await axios.post(`${API_URL}/v1/api/auth/refresh`, {
      refreshToken,
    });
  } catch (err) {
    return {
      success: false,
    };
  }

  if (res.status !== STATUS_CODES.OK) {
    localStorage.clear();
    sessionStorage.clear();

    return {
      success: false,
    };
  }

  // setting the items local storage for refresh and access in session cause tho the fuck likes access tokens. Me? Nah, fuck that cookie SESSIONS on TOP! 💪💪💪
  sessionStorage.setItem("accessToken", res.data.accessToken);
  localStorage.setItem("refreshToken", res.data.refreshToken);

  return {
    success: true,
    accessToken: res.data.accessToken,
    refreshToken: res.data.refreshToken,
  };
}
