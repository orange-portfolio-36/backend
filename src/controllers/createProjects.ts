import { PrismaClient, Project,  } from '@prisma/client';

const prisma = new PrismaClient();

async function createProject(projectData: Project,selectedTagIds:number[]) {

const createdProject = await prisma.project.create({
  data: {
    name: projectData.name,
    description: projectData.description,
    user_id: projectData.user_id,
    url_project: projectData.url_project,
    url_image: projectData.url_image,
    tags: {
      connect: selectedTagIds.map(tagId => ({ id: tagId })),
    },
  },
});

console.log(createdProject)

}

// Example
const projectData = {
  id:0,
  name: "Portfolio",
  description: "Este es mi portfolio",
  user_id: 1,
  url_project: "https://ejemplo.com/proyecto",
  url_image: "https://ejemplo.com/imagen.jpg",
};

const selectedTagIds = [1,3]

createProject(projectData,selectedTagIds);

