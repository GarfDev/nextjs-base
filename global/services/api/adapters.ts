import { AxiosResponse } from "axios";
import { ApiResponse } from "./types";

export const responseAdapter = (response: AxiosResponse): ApiResponse => ({
  success: response.status === 200,
  response: response.data,
  request: response.config,
  header: response.headers,
});
