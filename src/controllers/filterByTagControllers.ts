import prisma from "../configs/prismaConfig";

interface Tag {
    id: number;
    name: string;
  }

export const filter = async  (tags: Tag[]) => {
   
    const tagsName = tags?.map(e => e.name)

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
        include:{
            tags:true
        }
      });

      return projectsFilter

}