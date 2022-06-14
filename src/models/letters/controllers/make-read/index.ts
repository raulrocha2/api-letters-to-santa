import { LettersMongoRepository } from "../../../../shared/infra/db/mongodb/repositories/letters-mongo-repository"
import { MakeLetterReadUseCase } from "../../use-cases/make-read/make-letter-read-use-case"
import { MakeLetterReadController } from "./make-letter-read-controller"

export default () => {
  const lettersMongoRepository = new LettersMongoRepository()
  const makeLetterReadUseCase = new MakeLetterReadUseCase(lettersMongoRepository)
  const makeLetterReadController = new MakeLetterReadController(makeLetterReadUseCase)

  return makeLetterReadController

}