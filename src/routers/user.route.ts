import {Router} from "express";
import { signUp } from "../controllers";

const userRouter = Router()

userRouter.post('/signup', signUp)

export default userRouter