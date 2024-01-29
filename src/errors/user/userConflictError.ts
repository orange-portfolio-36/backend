import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { CustomError } from "../../@types";

export function userConflictError(
  error: PrismaClientKnownRequestError
): CustomError {
  return {
    message: "E-mail já registrado.",
    name: error.name,
    statusCode: 409,
    stack: error?.stack,
  };
}
