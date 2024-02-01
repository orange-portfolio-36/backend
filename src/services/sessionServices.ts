import { SessionBody, SessionRevoke, TokenPayload } from "../@types";
import { unauthorizedError } from "../errors/unauthorizedError";
import { getAccessToken } from "../helpers/getAccessToken";
import { sessionRepository } from "../repositories/sessionRepositories";
import jwt from "jsonwebtoken";

async function create(body: SessionBody) {
  await sessionRepository.create(body);
}

async function revoke(data: SessionRevoke) {
  await sessionRepository.revoke(data);
}

async function validate(refreshToken: string) {
  const secret = getSecret();
  try {
    const payload = jwt.verify(refreshToken, secret) as TokenPayload;
    return getAccessToken(payload);
  } catch (error) {
    const err = error as Error;
    await revoke({ token: refreshToken });
    throw unauthorizedError({ ...err, message: "Acesso negado!" });
  }
}

export const sessionService = {
  create,
  revoke,
  validate
};