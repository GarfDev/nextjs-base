import { Method } from "axios";

export interface APIParams {
  method: Method;
  route: string;
  headers?: any;
  data?: any;
}

export interface ApiResponse {
  success: boolean;
  request: any;
  response: any;
  error?: Error;
}
