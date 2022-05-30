import { Router } from "express";
import { adminRoutes } from "./admin-routes";


const router = Router();

router.use("/santa", adminRoutes)

export { router }