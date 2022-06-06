import { Router } from "express";
import { adminRoutes } from "./santa-routes";
import { letterRoutes } from "./letters-routes";


const router = Router();

router.use("/api/v1/letter", letterRoutes)
router.use("/api/v1/santa", adminRoutes)

export { router }