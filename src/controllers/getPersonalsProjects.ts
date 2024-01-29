import prisma from "../configs/prismaConfig";
import { filterPersonal } from "./filterPersonalProjectsByTags";


interface Tag {
    id: number;
    name: string;
  }

export const myProjects = async (id: number, tags?: Tag[])  => {

if(tags){

    const result = await filterPersonal(tags,id);

    console.log(result)
 
    return
}

    const res = await prisma.project.findMany({
        where:{
            user_id : id
        }
    })

    console.log(res)
    

}

const tags = [{id:1, name:"UX"}];
myProjects(3,tags)