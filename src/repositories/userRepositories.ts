import { User } from "@prisma/client";
import prisma from "../configs/prismaConfig";

async function create(user: User) {
  await prisma.user.create({ data: user });
}

export const userRepository = {
  create,
};
