import { SessionBody, SessionRevoke } from "../@types";
import prisma from "../configs/prismaConfig";

function create(body: SessionBody) {
  return prisma.session.create({ data: body });
}

function revoke({ token, userId }: SessionRevoke) {
  return prisma.session.delete({ where: { token, userId } });
}

export const sessionRepository = {
  create,
  revoke,
};
