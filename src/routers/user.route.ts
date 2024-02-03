import { Router } from "express";
import { googleAuth, signIn, signOut, signUp } from "../controllers";
import validateSchemaMiddleware from "../middlewares/validateSchemaMiddleware";
import { createUserSchema, signInSchema } from "../schemas";
import { authMiddleware } from "../middlewares/authMiddleware";

const userRouter = Router();

userRouter
  .post("/signup", validateSchemaMiddleware(createUserSchema), signUp)
  .post("/signin", validateSchemaMiddleware(signInSchema), signIn)
  .post("/signout", authMiddleware, signOut)
  .post("/google_auth", googleAuth);

export default userRouter;
