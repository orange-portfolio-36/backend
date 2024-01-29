import { Router } from "express";
import { signUp } from "../controllers";
import validateSchemaMiddleware from "../middlewares/validateSchemaMiddleware";
import { createUserSchema } from "../schemas";

const userRouter = Router();

userRouter.post("/signup", validateSchemaMiddleware(createUserSchema), signUp);

export default userRouter;
