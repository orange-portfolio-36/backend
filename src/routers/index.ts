import { Router } from "express";
import userRouter from "./user.route";
import sessionRouter from "./session.route";

const router = Router();

router.use("/user", userRouter);
router.use("/session", sessionRouter);

export default router;
