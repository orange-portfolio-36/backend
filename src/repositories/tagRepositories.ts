import prisma from "../configs/prismaConfig";

async function getAll() {
  const tags = await prisma.tag.findMany({});
  return tags;
}

export const tagRepository = {
  getAll,
};
