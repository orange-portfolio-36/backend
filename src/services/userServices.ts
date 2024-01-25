import { User } from "@prisma/client";
import { userRepository } from "../repositories/userRepositories";

async function signUp(user: User) {
  await userRepository.create(user);
}

export const userService = {
  signUp,
};
