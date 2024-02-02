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

export async function getAllProjects(req: Request, res: Response) {
  const projects = await projectService.getAll();
  res.status(200).send(projects);
}

export async function findProjectsByTags(
  req: Request<{}, {}, { tags: number[] }>,
  res: Response
) {
  const tags = req.body.tags;

  const projects = await projectService.getByTags(tags);

  res.status(200).send(projects);
}
