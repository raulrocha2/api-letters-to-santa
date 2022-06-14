import { LettersMongoRepository } from "../../../../shared/infra/db/mongodb/repositories/letters-mongo-repository"
import { MakeLetterApprovedUseCase } from "../../use-cases/make-approved/make-letter-approved-use-case"
import { MakeLetterApprovedController } from "./make-letter-approved-controller"

export default () => {
  const lettersMongoRepository = new LettersMongoRepository()
  const makeLetterApprovedUseCase = new MakeLetterApprovedUseCase(lettersMongoRepository)
  const makeLetterApprovedController = new MakeLetterApprovedController(makeLetterApprovedUseCase)

  return makeLetterApprovedController

}