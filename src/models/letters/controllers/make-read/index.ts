import { LetterRepositoryInMemory } from "../../../../shared/infra/repositories-in-memory/letter-repository-in-memory"
import { MakeLetterReadUseCase } from "../../use-cases/make-read/make-letter-read-use-case"
import { MakeLetterReadController } from "./make-letter-read-controller"

export default () => {
  const letterRepositoryInMemory = LetterRepositoryInMemory.getInstance()
  const makeLetterReadUseCase = new MakeLetterReadUseCase(letterRepositoryInMemory)
  const makeLetterReadController = new MakeLetterReadController(makeLetterReadUseCase)

  return makeLetterReadController

}