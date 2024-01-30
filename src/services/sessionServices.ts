import { SessionBody, SessionRevoke } from "../@types";
import { sessionRepository } from "../repositories/sessionRepositories";

async function create(body: SessionBody) {
  await sessionRepository.create(body);
}

async function revoke(data: SessionRevoke) {
  await sessionRepository.revoke(data);
}

export const sessionService = {
  create,
  revoke,
};
