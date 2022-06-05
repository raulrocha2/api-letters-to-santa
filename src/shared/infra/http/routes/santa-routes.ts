import { Router } from "express";
import createLoginController from "../../../../models/santa/controllers/create"
import authenticateController from "../../../../models/santa/controllers/authenticate"


const santaRoutes = Router();

santaRoutes.post('/new', (req, res) => {
  return createLoginController().handle(req, res)
});

santaRoutes.post('/login', (req, res) => {
  return authenticateController().handle(req, res)
});




export { santaRoutes as adminRoutes }