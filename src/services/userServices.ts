import { Prisma } from "@prisma/client";
import { compareSync, hashSync } from "bcryptjs";
import { userRepository } from "../repositories/userRepositories";
import { conflictError } from "../errors/conflictError";
import {
  GoogleCredentials,
  SigninBody,
  SigninResponse,
  SignupBody,
  TokenPayload,
} from "../@types";
import { unauthorizedError } from "../errors/unauthorizedError";
import { getAccessToken } from "../helpers/getAccessToken";
import { verifyGoogleToken } from "../configs/googleConfig";

async function signUp(body: SignupBody) {
  const salts = process.env.HASH_SALTS || 12;
  let password = null;
  if (body.password) {
    password = hashSync(body.password, Number(salts));
  }
  const promise = userRepository.create({ ...body, password });
  return await handlePrismaPromise(promise);
}

async function signIn({
  email,
  password,
}: SigninBody): Promise<SigninResponse> {
  if (!password) throw unauthorizedError({ message: "Acesso negado" });

  const promise = userRepository.findOrFail({ email });
  const user = await handlePrismaPromise(promise);

  if (!user.password) throw unauthorizedError({ message: "Acesso negado" });

  const isValid = compareSync(password, user.password);

  if (!isValid) throw unauthorizedError({ message: "Acesso negado" });

  const token = generateTokens(user.id);

  return {
    email: user.email,
    id: user.id,
    name: user.firstName,
    token,
  };
}

async function googleAuth(
  credential: GoogleCredentials
): Promise<SigninResponse> {
  const user = await verifyGoogleToken(credential);

  if (!user) throw unauthorizedError({ message: "Acesso negado" });

  const { email, family_name, given_name } = user;

  if (email && given_name) {
    try {
      const userFound = await userRepository.findOrFail({ email });

      const token = generateTokens(userFound.id);

      return {
        token,
        email: email,
        id: userFound.id,
        name: given_name,
      };
    } catch (error) {
      const user = await signUp({
        email: email,
        firstName: given_name,
        lastName: family_name ?? "",
        password: null,
      });

      const token = generateTokens(user.id);

      return {
        id: user.id,
        email: user.email,
        name: user.firstName,
        token,
      };
    }
  }
  throw new Error("Erro ao autenticar");
}

function generateTokens(userId: number) {
  const secret = process.env.JWT_SECRET;

  if (!secret) throw new Error("Segredo não encontrado!");
  const payload: TokenPayload = { userId: String(userId) };

  const accessToken = getAccessToken(payload);

  return accessToken;
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
  googleAuth,
};
