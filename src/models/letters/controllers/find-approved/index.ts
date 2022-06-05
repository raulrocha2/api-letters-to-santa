import { LetterRepositoryInMemory } from "../../../../shared/infra/repositories-in-memory/letter-repository-in-memory"
import { FindLettersApprovedUseCase } from "../../use-cases/find-approved/find-letters-approved-use-case"
import { FindLettersApprovedController } from "./find-all-letters-controller"

export default () => {
  const letterRepositoryInMemory = LetterRepositoryInMemory.getInstance()
  const findLettersApprovedUseCase = new FindLettersApprovedUseCase(letterRepositoryInMemory)
  const findLettersApprovedController = new FindLettersApprovedController(findLettersApprovedUseCase)

  return findLettersApprovedController

}