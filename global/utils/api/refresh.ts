import axios from "axios";
import Cookies from "js-cookie";
import { AuthenticationError } from "global/errors";

let refreshTokenPromise: Promise<any> | null = null;

export const getRefreshTokenPromise = () => refreshTokenPromise;

export const refreshTokens = (domain: string) => {
  const refreshToken = Cookies.get("refresh_token");
  refreshTokenPromise = axios
    .post(
      `${domain}/api/tokens/refresh`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          "X-Refresh-Token": refreshToken,
        },
      }
    )
    .then((response) => {
      const { data: responseData } = response;
      Cookies.set("access_token", responseData.tokens.access);
      refreshTokenPromise = null;
      return responseData;
    })
    .catch((error) => {
      refreshTokenPromise = null;
      if (error.response) {
        if (error.response.status === 401) {
          Cookies.set("access_token", "");
          Cookies.set("refresh_token", "");
          throw new AuthenticationError();
        }
      }
    });

  return refreshTokenPromise;
};
