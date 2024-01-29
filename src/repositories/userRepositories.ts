import { User } from "@prisma/client";
import prisma from "../configs/prismaConfig";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { userConflictError } from "../errors/user/userConflictError";

async function create(user: User) {
  try {
    await prisma.user.create({ data: user });
  } catch (err) {
    const error = err as PrismaClientKnownRequestError;
    if (!error?.code) {
      throw error;
    }
    if (error.code === "P2002") {
      //Unique constraint error
      throw userConflictError(error);
    }
  }
}

export const userRepository = {
  create,
};
