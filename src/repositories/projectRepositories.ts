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
          Tag: true,
        },
      },
    },
  });
}

async function getByTags(tags: number[]) {
  return await prisma.project.findMany({
    where: {
      ProjectTag: {
        some: {
          tagId: {
            in: tags,
          },
        },
      },
    },
    include: {
      ProjectTag: {
        include: {
          Tag: true,
        },
      },
    },
  });
}

export const projectRepository = {
  create,
  getAll,
  getByTags,
};
