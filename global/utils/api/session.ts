import axios from "axios";
import Cookies from "js-cookie";
import { SessionInitializeError } from "global/errors";

let sessionPromise: Promise<any> | null = null;

export const getSessionPromise = () => sessionPromise;

export const refreshSession = (domain: string) => {
  sessionPromise = axios
    .post(
      `${domain}/api/session/get`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      const { data: responseData } = response;
      Cookies.set("session_id", responseData.sessionId);
      sessionPromise = null;
      return responseData;
    })
    .catch((error) => {
      sessionPromise = null;
      if (error.response) {
        if (error.response.status === 401) {
          Cookies.set("session_id", "");
          throw new SessionInitializeError();
        }
      }
    });

  return sessionPromise;
};
