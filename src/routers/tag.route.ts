import { Router } from "express";
import { getAll } from "../controllers/tagController";

const tagRouter = Router();

tagRouter.get("/all", getAll);

export default tagRouter;
