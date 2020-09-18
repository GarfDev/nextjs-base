import AppError from "./AppError";

declare class AuthorizationError extends AppError {
  constructor();
}

export default AuthorizationError;
