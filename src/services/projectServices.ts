import { ProjectBody } from "../@types/project";
import { projectRepository } from "../repositories/projectRepositories";

async function create(body: ProjectBody) {
  await projectRepository.create(body);
}

export const projectService = {
  create,
};
