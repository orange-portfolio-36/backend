import { Router } from "express";
import {
  createProject,
  findProjectsByTags,
  getAllProjects,
  updateProject,
  removeProject
} from "../controllers/projectControllers";

const projectRouter = Router();

projectRouter
  .post("/", createProject)
  .get("/all", getAllProjects)
  .post("/tags", findProjectsByTags)
  .put("/:update", updateProject)
  .delete("/:remove", removeProject);

export default projectRouter;
