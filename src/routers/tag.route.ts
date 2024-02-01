import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import { getAll } from "../controllers/tagController";

const tagRouter = Router();

tagRouter.get("/all", authMiddleware, getAll);

export default tagRouter;
