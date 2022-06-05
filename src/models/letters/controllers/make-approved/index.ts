import { LetterRepositoryInMemory } from "../../../../shared/infra/repositories-in-memory/letter-repository-in-memory"
import { MakeLetterApprovedUseCase } from "../../use-cases/make-approved/make-letter-approved-use-case"
import { MakeLetterApprovedController } from "./make-letter-approved-controller"

export default () => {
  const letterRepositoryInMemory = LetterRepositoryInMemory.getInstance()
  const makeLetterApprovedUseCase = new MakeLetterApprovedUseCase(letterRepositoryInMemory)
  const makeLetterApprovedController = new MakeLetterApprovedController(makeLetterApprovedUseCase)

  return makeLetterApprovedController

}