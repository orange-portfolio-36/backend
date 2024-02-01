import { Router } from "express";
import { signIn, signUp } from "../controllers";
import validateSchemaMiddleware from "../middlewares/validateSchemaMiddleware";
import { createUserSchema, signInSchema } from "../schemas";

const userRouter = Router();

userRouter
  .post("/signup", validateSchemaMiddleware(createUserSchema), signUp)
  .post("/signin", validateSchemaMiddleware(signInSchema), signIn);

export default userRouter;
