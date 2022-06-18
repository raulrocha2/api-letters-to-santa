import { LettersMongoRepository } from "../../../../shared/infra/db/mongodb/repositories/letters-mongo-repository"
import { LetterRepositoryInMemory } from "../../../../shared/infra/repositories-in-memory/letter-repository-in-memory"
import { FindLettersApprovedUseCase } from "../../../../domain/letters/use-cases/find-approved/find-letters-approved-use-case"
import { FindLettersNotApprovedController } from "./find-not-approved-controller"

export default () => {
  const lettersMongoRepository = new LettersMongoRepository()
  const findLettersApprovedUseCase = new FindLettersApprovedUseCase(lettersMongoRepository)
  const findNotApprovedController = new FindLettersNotApprovedController(findLettersApprovedUseCase)

  return findNotApprovedController

}