import { LettersMongoRepository } from "../../../../shared/infra/db/mongodb/repositories/letters-mongo-repository"
import { LetterRepositoryInMemory } from "../../../../shared/infra/repositories-in-memory/letter-repository-in-memory"
import { FindLettersReadUseCase } from "../../../../domain/letters/use-cases/find-read/find-letters-read-use-case"
import { FindLettersNotReadController } from "./find-all-letters-controller"

export default () => {
  const lettersMongoRepository = new LettersMongoRepository()
  const findLettersReadUseCase = new FindLettersReadUseCase(lettersMongoRepository)
  const findLettersNotReadController = new FindLettersNotReadController(findLettersReadUseCase)

  return findLettersNotReadController

}