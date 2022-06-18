import { Router } from "express";
import createLoginController from "../../../../presentation/controllers/santa/create"
import authenticateController from "../../../../presentation/controllers/santa/authenticate"
import { expressRouteAdapter } from "./express-route-adapter";


const santaRoutes = Router();

santaRoutes.post('/new', expressRouteAdapter(createLoginController()));

santaRoutes.post('/login', expressRouteAdapter(authenticateController()));




export { santaRoutes as adminRoutes }