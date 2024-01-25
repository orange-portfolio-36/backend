import { Router } from "express";
import { signUp } from "../../controllers";

const signupRouter = Router();

signupRouter.post("/signup", signUp);

export default signupRouter;
