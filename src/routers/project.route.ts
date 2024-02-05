import { Router } from "express";
import {
  createProject,
  findProjectsByTags,
  getAllProjects,
  updateProject,
  removeProject,
} from "../controllers/projectControllers";
import { authMiddleware } from "../middlewares/authMiddleware";

const projectRouter = Router();

projectRouter
  .post("/", authMiddleware, createProject)
  .get("/all", getAllProjects)
  .post("/tags", findProjectsByTags)
  .put("/:update", authMiddleware,updateProject)
  .delete("/:remove", authMiddleware, removeProject);

export default projectRouter;
