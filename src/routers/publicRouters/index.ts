import { Router } from "express";
import { signUp } from "../../controllers";

const publicRouters = Router();

publicRouters.use('/user', signUp);

export default publicRouters;
