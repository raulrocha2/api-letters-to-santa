import { Router } from "express";
import createLetterController from "../../../../models/letters/controllers/create"


const letterRoutes = Router();

letterRoutes.post('/', (req, res) => {
  return createLetterController().handle(req, res)
})


export { letterRoutes }