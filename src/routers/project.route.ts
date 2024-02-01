import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import { createProject } from "../controllers/projectControllers";

const projectRouter = Router();

projectRouter.post("/", authMiddleware, createProject);

export default projectRouter
