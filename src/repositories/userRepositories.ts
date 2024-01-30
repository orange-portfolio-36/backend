import prisma from "../configs/prismaConfig";
import { SignupBody } from "../@types";
import { User } from "@prisma/client";

function create(body: SignupBody) {
  return prisma.user.create({ data: body });
}

function findOrFail({ email }: Pick<User, "email">) {
  return prisma.user.findUniqueOrThrow({
    where: { email },
  });
}

export const userRepository = {
  create,
  findOrFail,
};
