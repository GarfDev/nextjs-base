import AppError from "./AppError";

declare class UnknownError extends AppError {
  statusCode: number;
  constructor(statusCode: number, messages?: string[], data?: any);
}

export default UnknownError;
