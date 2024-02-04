import { Router } from "express";
import userRouter from "./user.route";
import sessionRouter from "./session.route";
import tagRouter from "./tag.route";
import projectRouter from "./project.route";

const router = Router();

router.use("/user", userRouter);
router.use("/session", sessionRouter);
router.use("/tag", tagRouter);
router.use("/project", projectRouter);

export default router;
