import { CustomError } from "../@types";

export function unauthorizedError(
  error: Omit<CustomError, "name">
): CustomError {
  return {
    ...error,
    name: "UNAUTHORIZED",
    statusCode: 401,
  };
}
