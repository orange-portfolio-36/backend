import { User } from "@prisma/client";
import { hashSync } from "bcrypt";
import { userRepository } from "../repositories/userRepositories";

async function signUp(user: User) {
  const salts = process.env.HASH_SALTS || 12
  const password = hashSync(user.password, salts);
  await userRepository.create({...user, password});
}

export const userService = {
  signUp,
};
