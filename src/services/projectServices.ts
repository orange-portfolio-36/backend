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
  const userConfirmation = await confirmExclusionFromUser();

  if (userConfirmation) {
    await projectRepository.remove(idProject);
  } else {
    throw new Error('Exclusão cancelada pelo usuário');
  }
}

async function confirmExclusionFromUser(): Promise<boolean> {
  const userConfirmation = await showDialog('Tem certeza que deseja excluir o projeto?');

  return userConfirmation;
}

async function showDialog(message: string): Promise<boolean> {
  return window.confirm(message);
}


export const projectService = {
  create,
  getAll,
  getByTags,
  update,
  remove,
};
