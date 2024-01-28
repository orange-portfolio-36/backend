import {PrismaClient, Project } from '@prisma/client'

const prisma = new PrismaClient();

interface Tag {
  id: number;
  name: string;
}

async function getProjects(tags: Tag[]){

  const tagsName = tags.map(e => e.name)

  if(tags){

    console.log("parameter " + tagsName);
   
      const projects = await prisma.project.findMany({
        where: {
          tags: {
            some: {
              name: {
                in: tagsName.map(e => e),
              },
            },
          },
        },
      });
    

    console.log(projects);

    return
  }

  

  const projects = await prisma.project.findMany({
    include:{
      tags:true

    }
  })


}

const tags = [{id:2, name:"Mobile"}];

getProjects(tags);