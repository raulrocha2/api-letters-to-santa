import { Router } from "express";
import { ensureAuthenticated } from "../middleware/ensure-authentacate";
import createLetterController from "../../../../presentation/controllers/letters/create"
import findAllLettersController from "../../../../presentation/controllers/letters/find-all"
import findLettersApprovedController from "../../../../presentation/controllers/letters/find-approved"
import findLettersReadController from "../../../../presentation/controllers/letters/find-read"
import makeLetterApprovedController from "../../../../presentation/controllers/letters/make-approved"
import makeLetterReadController from "../../../../presentation/controllers/letters/make-read"
import deleteLetterController from "../../../../presentation/controllers/letters/delete"
import findLettersNotReadController from "../../../../presentation/controllers/letters/find-not-read"
import findNotApprovedController from "../../../../presentation/controllers/letters/find-not-approved"

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