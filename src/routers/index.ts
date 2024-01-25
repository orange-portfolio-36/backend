import { Router } from "express";
import publicRouters from "./publicRouters";

const router = Router();

router.use(publicRouters);

export default router;
