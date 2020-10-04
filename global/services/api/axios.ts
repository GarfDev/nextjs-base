import _ from "lodash";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import Cookies from "js-cookie";
import { APIParams } from "./types";
import { defaultHeaders } from "./constants";

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

const getDomain = () => {
  if (process.env.NODE_ENV === "development") {
    return process.env.REMOTE_URL || "";
  }

  return `https://${location.host}`;
};

const DOMAIN = getDomain();

const callAxios = ({
  route,
  method = "get",
  headers = {},
  data,
}: APIParams): any => {
  // Initial Config
  const config: AxiosRequestConfig = {
    method,
    url: `${DOMAIN}/api${route}`,
    headers: {
      ...defaultHeaders,
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
  // Main return
  return axios(config)
    .then((response: AxiosResponse) => response.data)
    .catch((error: AxiosError) => {
      const { response } = error;
      if (!response) throw error;
      return response;
    });
};

export default callAxios;
