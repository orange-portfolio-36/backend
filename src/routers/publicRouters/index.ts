import { Router } from "express";
import { signUp } from "../../controllers";
import { registerProject } from "../../controllers/createProjectsControllers";


const publicRouters = Router();

publicRouters.use('/user', signUp);
publicRouters.use('/create', registerProject);


export default publicRouters;
