import prisma from "../configs/prismaConfig";
import { filter } from "./filterByTagControllers";

interface Tag {
  id: number;
  name: string;
}

async function getProjects(tags?: Tag[]){

  if(tags){
 
   const result = await filter(tags);

   console.log(result)

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

getProjects();