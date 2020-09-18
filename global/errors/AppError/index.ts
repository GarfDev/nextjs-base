import { ErrorType } from "../constants";

declare class AppError extends Error {
  type: ErrorType;
  data: any;
  messages: string[];
  constructor(type: ErrorType, messages?: string[], data?: any);
}
export default AppError;
