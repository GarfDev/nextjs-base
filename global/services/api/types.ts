import { AxiosRequestConfig, Method } from "axios";

export interface APIParams {
  method: Method;
  route: string;
  headers?: any;
  data?: any;
}

export interface ApiResponse {
  header: any;
  success: boolean;
  request: AxiosRequestConfig;
  response: any;
  error?: Error;
}
