import { LetterRepositoryInMemory } from "../../../../shared/infra/repositories-in-memory/letter-repository-in-memory"
import { FindLettersApprovedUseCase } from "../../use-cases/find-approved/find-letters-approved-use-case"
import { FindLettersNotApprovedController } from "./find-not-approved-controller"

export default () => {
  const letterRepositoryInMemory = LetterRepositoryInMemory.getInstance()
  const findLettersApprovedUseCase = new FindLettersApprovedUseCase(letterRepositoryInMemory)
  const findNotApprovedController = new FindLettersNotApprovedController(findLettersApprovedUseCase)

  return findNotApprovedController

}