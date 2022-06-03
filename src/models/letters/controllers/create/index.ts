import { LetterRepositoryInMemory } from "../../../../shared/infra/repositories-in-memory/letter-repository-in-memory"
import { CreateLetterUseCase } from "../../use-cases/create/create-letter-use-case"
import { CreateLetterController } from "./create-letter-controller"

export default () => {
  const letterRepositoryInMemory = LetterRepositoryInMemory.getInstance()
  const createLetterUseCase = new CreateLetterUseCase(letterRepositoryInMemory)
  const createLetterController = new CreateLetterController(createLetterUseCase)

  return createLetterController
}