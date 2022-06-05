import { LetterRepositoryInMemory } from "../../../../shared/infra/repositories-in-memory/letter-repository-in-memory"
import { FindAllLettersUseCase } from "../../use-cases/find-all/find-all-letters-use-case"
import { FindAllLettersController } from "./find-all-letters-controller"

export default () => {
  const letterRepositoryInMemory = LetterRepositoryInMemory.getInstance()
  const findAllLettersUseCase = new FindAllLettersUseCase(letterRepositoryInMemory)
  const findAllLettersController = new FindAllLettersController(findAllLettersUseCase)

  return findAllLettersController

}