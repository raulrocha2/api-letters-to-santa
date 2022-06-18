import { LettersMongoRepository } from "../../../../shared/infra/db/mongodb/repositories/letters-mongo-repository"
import { FindAllLettersUseCase } from "../../../../domain/letters/use-cases/find-all/find-all-letters-use-case"
import { FindAllLettersController } from "./find-all-letters-controller"

export default () => {
  const letterMongoRepository = new LettersMongoRepository()
  const findAllLettersUseCase = new FindAllLettersUseCase(letterMongoRepository)
  const findAllLettersController = new FindAllLettersController(findAllLettersUseCase)

  return findAllLettersController

}