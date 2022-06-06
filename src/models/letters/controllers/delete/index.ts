import { LetterRepositoryInMemory } from "../../../../shared/infra/repositories-in-memory/letter-repository-in-memory"
import { DeleteLetterUseCase } from "../../use-cases/delete/delete-letter-use-case"
import { DeleteLetterController } from "./delete-letter-controller"

export default () => {
  const letterRepositoryInMemory = LetterRepositoryInMemory.getInstance()
  const deleteLetterUseCase = new DeleteLetterUseCase(letterRepositoryInMemory)
  const deleteLetterController = new DeleteLetterController(deleteLetterUseCase)
  return deleteLetterController
}