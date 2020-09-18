import axios, {
  Method,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";
import Cookies from "js-cookie";
import _ from "lodash";
// Import Internal Resources
import {
  ApplicationError,
  AuthenticationError,
  AuthorizationError,
  ServerError,
  SessionInitializeError,
  UnknownError,
} from "global/errors";
import { defaultHeader } from "./constants";
import { getRefreshTokenPromise, refreshTokens } from "./refresh";
import { getSessionPromise, refreshSession } from "./session";

const insertFormData = (formData: FormData, key: string, value: any) => {
  if (_.isPlainObject(value)) {
    _.forEach(value, (v2, k2) => {
      insertFormData(formData, `${key}[${k2}]`, v2);
    });
  } else if (_.isArray(value)) {
    _.forEach(value, (v2) => {
      insertFormData(formData, `${key}[]`, v2);
    });
  } else {
    formData.append(key, value);
  }
};

const transformFormData = (data: any) => {
  const form = new FormData();
  _.forEach(data, (v, k) => {
    insertFormData(form, k, v);
  });
  return form;
};

interface Params {
  method: Method;
  route: string;
  headers?: any;
  data?: any;
}

const getDomain = () => {
  if (location.hostname === "localhost") {
    return process.env.REMOTE_URL || "";
  }

  return `https://${location.host}`;
};

const DOMAIN = getDomain();

export default function api({
  method = "get",
  route,
  headers = {},
  data,
}: Params): any {
  const sessionId = Cookies.get("session_id");
  const accessToken = Cookies.get("access_token");
  const authorizationHeader = accessToken ? { Authorization: accessToken } : {};
  const sessionHeader = sessionId ? { sessionId } : {};
  // Setting up axios config
  const config: AxiosRequestConfig = {
    method,
    url: `${DOMAIN}/api${route}`,
    headers: {
      ...defaultHeader,
      ...authorizationHeader,
      ...sessionHeader,
      ...headers,
    },
    params: method === "get" ? data : {},
    data: method === "post" ? data : undefined,
    transformRequest: [
      (requestData, requestHeaders) => {
        if (requestHeaders["Content-Type"] === "multipart/form-data") {
          return transformFormData(requestData);
        }
        return JSON.stringify(data);
      },
    ],
  };
  // Return request
  return axios(config)
    .then((response: AxiosResponse) => response.data)
    .catch((error: AxiosError) => {
      const { response } = error;
      if (response) {
        switch (response.status) {
          case 440: {
            if (!sessionId) {
              const sessionPromise = getSessionPromise();
              if (sessionPromise) {
                return sessionPromise.then(() => {
                  api({
                    route,
                    method,
                    headers,
                    data,
                  });
                });
              }
              return refreshSession(DOMAIN).then(() =>
                api({
                  route,
                  method,
                  headers,
                  data,
                })
              );
            }
            throw new SessionInitializeError();
          }
          case 401: {
            if (accessToken) {
              const tokenPromise = getRefreshTokenPromise();
              if (tokenPromise) {
                return tokenPromise.then(() =>
                  api({
                    route,
                    method,
                    headers,
                    data,
                  })
                );
              }
              return refreshTokens(DOMAIN).then(() =>
                api({
                  route,
                  method,
                  headers,
                  data,
                })
              );
            }
            throw new AuthenticationError(
              response.data ? response.data.errors : undefined
            );
          }
          case 403:
            throw new AuthorizationError();
          case 404:
            throw new ServerError();
          default:
            if (response.status >= 400 && response.status < 500) {
              throw new ApplicationError(response.data.errors, response.data);
            } else if (response.status >= 500) {
              throw new ServerError();
            }
            throw new UnknownError(response.status, response.data.errors);
        }
      } else {
        throw error;
      }
    });
}
