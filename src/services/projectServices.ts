import { ProjectBody } from "../@types/project";
import { projectRepository } from "../repositories/projectRepositories";

async function create(body: ProjectBody) {
  await projectRepository.create(body);
}

async function getAll(){
  return await projectRepository.getAll()
}

async function getByTags(tags: number[]){
  return await projectRepository.getByTags(tags);
}

export const projectService = {
  create,
  getAll,
  getByTags,
};
