import { Method } from 'axios';

export interface APIParams {
  method: Method;
  route: string;
  headers?: any;
  data?: any;
}