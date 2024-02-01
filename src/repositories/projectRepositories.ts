import { ProjectBody } from "../@types/project";
import prisma from "../configs/prismaConfig";

async function create(body: ProjectBody) {
  await prisma.project.create({
    data: body,
  });
}

async function getAll() {
  return await prisma.project.findMany({
    include: {
      ProjectTag: {
        include: {
          Tag: true
        },
      },
    },
  });
}

export const projectRepository = {
  create,
  getAll,
};
