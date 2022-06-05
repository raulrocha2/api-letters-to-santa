import { Router } from "express";
import { letterRoutes } from "./letters-routes";


const router = Router();

router.use("/v1/letter", letterRoutes)

export { router }