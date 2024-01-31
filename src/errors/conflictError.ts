import { CustomError } from "../@types";

export function conflictError(
  error: CustomError
): CustomError {
  return {
    ...error,
    statusCode: 409,
  };
}
