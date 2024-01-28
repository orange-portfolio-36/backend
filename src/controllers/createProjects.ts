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

const projectData2 = {
  id:0,
  name: "Design",
  description: "Este es mi Design",
  user_id: 2,
  url_project: "https://ejemplo.com/proyectobalalala",
  url_image: "https://ejemplo.com/imagenasdsa.jpg",
};

const projectData3 = {
  id:0,
  name: "Portfolio",
  description: "Este es mi portfolio",
  user_id: 3,
  url_project: "https://ejemplo.com/proyectoasdfasfd",
  url_image: "https://ejemplo.com/imagendfdf.jpg",
};

const selectedTagIds = [1,3]
const selectedTagIds2 = [2]
const selectedTagIds3 = [3]

createProject(projectData,selectedTagIds);
createProject(projectData2,selectedTagIds2);
createProject(projectData3,selectedTagIds3);

