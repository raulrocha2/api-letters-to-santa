import { LetterRepositoryInMemory } from "../../../../shared/infra/repositories-in-memory/letter-repository-in-memory"
import { FindLettersReadUseCase } from "../../use-cases/find-read/find-letters-read-use-case"
import { FindLettersReadController } from "./find-all-letters-controller"

export default () => {
  const letterRepositoryInMemory = LetterRepositoryInMemory.getInstance()
  const findLettersReadUseCase = new FindLettersReadUseCase(letterRepositoryInMemory)
  const findLettersReadController = new FindLettersReadController(findLettersReadUseCase)

  return findLettersReadController

}