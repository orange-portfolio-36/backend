import { Request, Response } from "express";
import { ProjectBody } from "../@types/project";
import { projectService } from "../services/projectServices";

export async function createProject(
  req: Request<{}, {}, Omit<ProjectBody, "userId">>,
  res: Response<{}, { userId: number }>
) {
  const userId = res.locals.userId;
  const body = req.body;

  await projectService.create({
    ...body,
    userId,
  });

  res.sendStatus(201);
}
