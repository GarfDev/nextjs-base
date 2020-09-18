import AppError from "./AppError";

declare class SessionInitializeError extends AppError {
  constructor();
}

export default SessionInitializeError;
