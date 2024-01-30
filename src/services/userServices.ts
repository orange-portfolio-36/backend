import { Prisma, User } from "@prisma/client";
import { compareSync, hashSync } from "bcryptjs";
import { userRepository } from "../repositories/userRepositories";
import { conflictError } from "../errors/conflictError";
import { SigninBody, SignupBody } from "../@types";
import { unauthorizedError } from "../errors/unauthorizedError";
import { sessionRepository } from "../repositories/sessionRepositories";

async function signUp(body: SignupBody) {
  const salts = process.env.HASH_SALTS || 12;
  const password = hashSync(body.password, Number(salts));
  const promise = userRepository.create({ ...body, password });
  await handlePrismaPromise(promise);
}

async function signIn({ email, password }: SigninBody) {
  const promise = userRepository.findOrFail({ email });
  const user = await handlePrismaPromise(promise);
  const isValid = compareSync(password, user.password);
  if (!isValid) throw unauthorizedError({ message: "Acesso negado" });
}

const handlePrismaError = (error: unknown) => {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    if (error.code === "P2002") {
      throw conflictError({ ...error, message: "E-mail já cadastrado!" });
    }
  }
  throw error;
};

async function handlePrismaPromise<T>(prismaPromise: Promise<T>) {
  return prismaPromise.then((data) => data).catch(handlePrismaError);
}

export const userService = {
  signUp,
};
