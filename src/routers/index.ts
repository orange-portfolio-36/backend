import { Router } from "express";
import publicRouters from "./publicRouters";

const router = Router();

router.use("/public", publicRouters);

export default router;
