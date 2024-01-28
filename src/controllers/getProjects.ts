import prisma from "../configs/prismaConfig";

interface Tag {
  id: number;
  name: string;
}

async function getProjects(tags?: Tag[]){

  const tagsName = tags?.map(e => e.name)

  if(tags){
 
      const projectsFilter = await prisma.project.findMany({
        where: {
          tags: {
            some: {
              name: {
                in: tagsName?.map(e => e),
              },
            },
          },
        },
      });
    

    console.log(projectsFilter);

    return
  }

  

  const projects = await prisma.project.findMany({
    include:{
      tags:true

    }
  })

console.log(projects);

}

const tags = [{id:2, name:"Mobile"}];

getProjects([{id:1,name:"UX"}]);