import { Router } from "express";
import { signUp } from "../../controllers";

const publicRouters = Router();

publicRouters.use(signUp);

export default publicRouters;
