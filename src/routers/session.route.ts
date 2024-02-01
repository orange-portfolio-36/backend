import { Router } from "express";
import { refresh } from "../controllers/sessionControllers";

const sessionRouter = Router();

sessionRouter.post("/refresh", refresh);

export default sessionRouter;
