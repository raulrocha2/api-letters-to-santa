import { Router } from "express";
import { letterRoutes } from "./letters-routes";


const router = Router();

router.use("/letter", letterRoutes)

export { router }