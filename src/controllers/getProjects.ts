import {PrismaClient, Project } from '@prisma/client'

const prisma = new PrismaClient();

async function getProjects(nameTag?: string[]){

  if(nameTag){
   
    const projectsWithTag = await prisma.tag.findUnique({

      where: {
        name: nameTag[0],
      },
    })
    .projects();

  return projectsWithTag;
  }

  const projects = await prisma.project.findMany({
    include:{
      tags:true
    }
  })
  console.log(projects)

}

getProjects(['work'])