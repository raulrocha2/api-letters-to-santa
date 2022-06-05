import { Router } from "express";
import createLetterController from "../../../../models/letters/controllers/create"
import findAllLettersController from "../../../../models/letters/controllers/find-all"
import findLettersApprovedController from "../../../../models/letters/controllers/find-approved"
import findLettersReadController from "../../../../models/letters/controllers/find-read"
import makeLetterApprovedController from "../../../../models/letters/controllers/make-approved"
import makeLetterReadController from "../../../../models/letters/controllers/make-read"


const letterRoutes = Router();

letterRoutes.post('/new', (req, res) => {
  return createLetterController().handle(req, res)
});

letterRoutes.get('/', (req, res) => {
  return findAllLettersController().handle(req, res)
});

letterRoutes.get('/get-approved', (req, res) => {
  return findLettersApprovedController().handle(req, res)
});

letterRoutes.get('/get-read', (req, res) => {
  return findLettersReadController().handle(req, res)
});

letterRoutes.post('/make-approved/:id', (req, res) => {
  return makeLetterApprovedController().handle(req, res)
});


letterRoutes.post('/make-read/:id', (req, res) => {
  return makeLetterReadController().handle(req, res)
});



export { letterRoutes }