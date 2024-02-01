import {Project} from "@prisma/client"
import prisma from "../configs/prismaConfig";

export async function createProject(projectData: Project,selectedTagIds?:number[]) {

const createdProject = await prisma.project.create({
  data: {
    name: projectData.name,
    description: projectData.description,
    user_id: projectData.user_id,
    url_project: projectData.url_project,
    url_image: projectData.url_image,
    tags: {
      connect: selectedTagIds?.map(tagId => ({ id: tagId })),
    },
  },
});

}

export const createProjectRepository = {
    createProject,
  };