import AppError from "./AppError";

declare class ServerError extends AppError {
  constructor();
}

export default ServerError;
