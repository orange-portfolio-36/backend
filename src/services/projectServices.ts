import { ProjectBody } from "../@types/project";
import { projectRepository } from "../repositories/projectRepositories";

async function create(body: ProjectBody) {
  await projectRepository.create(body);
}

async function getAll() {
  return await projectRepository.getAll();
}

async function getByTags(tags: number[]) {
  return await projectRepository.getByTags(tags);
}

async function update(idProject: number, body: ProjectBody) {
  return await projectRepository.update(idProject, body);
}

async function remove(idProject: number) {
  return await projectRepository.remove(idProject);
}

export const projectService = {
  create,
  getAll,
  getByTags,
  update,
  remove,
};
