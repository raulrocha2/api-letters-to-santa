import { LettersMongoRepository } from "../../../../shared/infra/db/mongodb/repositories/letters-mongo-repository"
import { DeleteLetterUseCase } from "../../use-cases/delete/delete-letter-use-case"
import { DeleteLetterController } from "./delete-letter-controller"

export default () => {
  const letterMongoRepository = new LettersMongoRepository()
  const deleteLetterUseCase = new DeleteLetterUseCase(letterMongoRepository)
  const deleteLetterController = new DeleteLetterController(deleteLetterUseCase)
  return deleteLetterController
}