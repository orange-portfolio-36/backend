import { Router } from "express";
import { signUp } from "../../controllers";

const signRouter = Router();

signRouter.post("/signup", signUp);

export default signRouter;
