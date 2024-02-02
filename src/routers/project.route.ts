import { Router } from "express";
import {
  createProject,
  findProjectsByTags,
  getAllProjects,
} from "../controllers/projectControllers";

const projectRouter = Router();

projectRouter
  .post("/", createProject)
  .get("/all", getAllProjects)
  .post("/tags", findProjectsByTags);

export default projectRouter;
