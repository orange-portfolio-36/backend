import { Request, Response } from "express";
import { Project } from "@prisma/client";
import { createProjectRepository } from "../repositories/createProjectsRepositories";

interface RegisterProjectRequest {
  projectData: Project;
  userId: number[];
}

export async function registerProject(req: Request<{}, {}, RegisterProjectRequest>, res: Response) {
  const { projectData, userId } = req.body

  console.log("Esta es la respuesta: " + projectData)

  await createProjectRepository.createProject(projectData, userId);

  res.sendStatus(201);
  
}



