import { SantaMongoRepository } from "../../../../shared/infra/db/mongodb/repositories/santa-mongo-repository";
import { GenerateTokenJWT } from "../../../../shared/utils/generate-token-jwt";
import { CreateLoginUseCase } from "../../../../domain/santa/use-cases/create/create-login-use-case"
import { CreateLoginController } from "./create-login-controller";

export default () => {
  const generateTokenJWT = new GenerateTokenJWT();
  const santaRepository = new SantaMongoRepository();
  const createLoginUseCase = new CreateLoginUseCase(santaRepository, generateTokenJWT);
  const createLoginController = new CreateLoginController(createLoginUseCase);
  return createLoginController
}