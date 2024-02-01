import { Router } from "express";
import { registerProject } from "../../controllers/createProjectsControllers";

const createRouter = Router();

createRouter.post("/create", registerProject);

export default createRouter;
