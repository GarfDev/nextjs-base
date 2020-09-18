import AppError from "./AppError";

declare class ApplicationError extends AppError {
  constructor(messages: string[], data: any);
}

export default ApplicationError;
