import prisma from "../configs/prismaConfig";

export const myProjects = async (id: number)  => {

    const res = await prisma.project.findMany({
        where:{
            user_id : id
        }
    })

    console.log(res)

}

myProjects(2)