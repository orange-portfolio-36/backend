import prisma from "../configs/prismaConfig";

interface Tag {
    id: number;
    name: string;
  }

export const filterPersonal = async  (tags: Tag[], id:number) => {
   
    const tagsName = tags?.map(e => e.name)

    console.log(tagsName +" "+ id)

    const projectsFilter = await prisma.project.findMany({
        where: {
          user_id: id,
          tags: {
            some: {
              name: {
                in: tagsName?.map(e => e),
              },
            },
          },
        },
        include:{
            tags:true
        }
      });

      return projectsFilter

}