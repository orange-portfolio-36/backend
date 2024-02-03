import { Prisma } from "@prisma/client";
import { compareSync, hashSync } from "bcryptjs";
import { userRepository } from "../repositories/userRepositories";
import { conflictError } from "../errors/conflictError";
import {
  GoogleCredentials,
  SigninBody,
  SignupBody,
  TokenPayload,
} from "../@types";
import { unauthorizedError } from "../errors/unauthorizedError";
import { sessionRepository } from "../repositories/sessionRepositories";
import jwt from "jsonwebtoken";
import { getAccessToken } from "../helpers/getAccessToken";
import { verifyGoogleToken } from "../configs/googleConfig";

async function signUp(body: SignupBody) {
  const salts = process.env.HASH_SALTS || 12;
  let password = null;
  if (body.password) {
    password = hashSync(body.password, Number(salts));
  }
  const promise = userRepository.create({ ...body, password });
  await handlePrismaPromise(promise);
}

async function signIn({ email, password }: SigninBody) {
  if (!password) throw unauthorizedError({ message: "Acesso negado" });

  const promise = userRepository.findOrFail({ email });
  const user = await handlePrismaPromise(promise);

  if (!user.password) throw unauthorizedError({ message: "Acesso negado" });

  const isValid = compareSync(password, user.password);

  if (!isValid) throw unauthorizedError({ message: "Acesso negado" });

  const tokens = await generateTokens(user.id);

  return tokens;
}

async function googleAuth(credential: GoogleCredentials) {
  const user = await verifyGoogleToken(credential);

  if (!user) throw unauthorizedError({ message: "Acesso negado" });

  const { email, family_name, given_name } = user;

  if (email && given_name) {
    try {
      const userFound = await userRepository.findOrFail({ email });

      const tokens = await generateTokens(userFound.id);

      return tokens;
    } catch (error) {
      await signUp({
        email: email,
        firstName: given_name,
        lastName: family_name ?? "",
        password: null,
      });
    }
  }
}

async function generateTokens(userId: number) {
  const secret = process.env.JWT_SECRET;

  if (!secret) throw new Error("Segredo não encontrado!");
  const payload: TokenPayload = { userId: String(userId) };

  const refreshToken = jwt.sign(payload, secret, {
    expiresIn: "1d",
  });
  const accessToken = getAccessToken(payload);

  await sessionRepository.create({ token: refreshToken, userId });

  return { refreshToken, accessToken };
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
  signIn,
  googleAuth
};
