import { ProjectBody } from "../@types/project";
import prisma from "../configs/prismaConfig";

async function create(body: ProjectBody) {
  await prisma.project.create({
    data: body,
  });
}

export const projectRepository = {
  create,
};
