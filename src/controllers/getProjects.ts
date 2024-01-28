import {PrismaClient, Project } from '@prisma/client'

const prisma = new PrismaClient();

async function getProjects(){

  const projects = await prisma.project.findMany({
    include:{
      tags:true
    }
  })
  console.log(projects)

}

getProjects()