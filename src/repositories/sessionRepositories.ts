import { SessionBody, SessionRevoke } from "../@types";
import prisma from "../configs/prismaConfig";

function create(body: SessionBody) {
  return prisma.session.create({ data: body });
}

function revoke({ token }: SessionRevoke) {
  return prisma.session.delete({ where: { token } });
}

async function findOrFail(token: string) {
  await prisma.session.findFirstOrThrow({
    where: {
      token,
    },
  });
}

export const sessionRepository = {
  create,
  revoke,
  findOrFail,
};
