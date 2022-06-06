import { Router } from "express";
import { ensureAuthenticated } from "../middleware/ensure-authentacate";
import createLetterController from "../../../../models/letters/controllers/create"
import findAllLettersController from "../../../../models/letters/controllers/find-all"
import findLettersApprovedController from "../../../../models/letters/controllers/find-approved"
import findLettersReadController from "../../../../models/letters/controllers/find-read"
import makeLetterApprovedController from "../../../../models/letters/controllers/make-approved"
import makeLetterReadController from "../../../../models/letters/controllers/make-read"
import deleteLetterController from "../../../../models/letters/controllers/delete"
import findLettersNotReadController from "../../../../models/letters/controllers/find-not-read"
import findNotApprovedController from "../../../../models/letters/controllers/find-not-approved"

const letterRoutes = Router();

letterRoutes.post('/new', (req, res) => {
  return createLetterController().handle(req, res)
});

letterRoutes.get('/', ensureAuthenticated, (req, res) => {
  return findAllLettersController().handle(req, res)
});

letterRoutes.get('/approved', ensureAuthenticated, (req, res) => {
  return findLettersApprovedController().handle(req, res)
});

letterRoutes.get('/approved/not', ensureAuthenticated, (req, res) => {
  return findNotApprovedController().handle(req, res)
});

letterRoutes.get('/read', ensureAuthenticated, (req, res) => {
  return findLettersReadController().handle(req, res)
});

letterRoutes.get('/read/not', ensureAuthenticated, (req, res) => {
  return findLettersNotReadController().handle(req, res)
});

letterRoutes.put('/approved/:id', ensureAuthenticated, (req, res) => {
  return makeLetterApprovedController().handle(req, res)
});


letterRoutes.put('/read/:id', ensureAuthenticated, (req, res) => {
  return makeLetterReadController().handle(req, res)
});

letterRoutes.delete('/delete/:id', ensureAuthenticated, (req, res) => {
  return deleteLetterController().handle(req, res)
});



export { letterRoutes }