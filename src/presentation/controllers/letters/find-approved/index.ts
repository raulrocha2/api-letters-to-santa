import { LettersMongoRepository } from "../../../../shared/infra/db/mongodb/repositories/letters-mongo-repository"
import { FindLettersApprovedUseCase } from "../../../../domain/letters/use-cases/find-approved/find-letters-approved-use-case"
import { FindLettersApprovedController } from "./find-letters-approved-controller"

export default () => {
  const lettersMongoRepository = new LettersMongoRepository()
  const findLettersApprovedUseCase = new FindLettersApprovedUseCase(lettersMongoRepository)
  const findLettersApprovedController = new FindLettersApprovedController(findLettersApprovedUseCase)

  return findLettersApprovedController

}