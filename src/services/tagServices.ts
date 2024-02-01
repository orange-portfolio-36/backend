import { tagRepository } from "../repositories/tagRepositories";

async function getAll() {
  return await tagRepository.getAll();
}

export const tagService = {
  getAll,
};
