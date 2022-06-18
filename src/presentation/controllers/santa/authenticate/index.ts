import { SantaMongoRepository } from "../../../../shared/infra/db/mongodb/repositories/santa-mongo-repository";
import { GenerateTokenJWT } from "../../../../shared/utils/generate-token-jwt";
import { AuthenticateUseCase } from "../../../../domain/santa/use-cases/authenticate/authenticate-use-case";
import { AuthenticateController } from "./authenticate-controller";


export default () => {
  const generateTokenJWT = new GenerateTokenJWT();
  const santaRepository = new SantaMongoRepository();
  const authenticateUseCase = new AuthenticateUseCase(santaRepository, generateTokenJWT);
  const authenticateController = new AuthenticateController(authenticateUseCase);
  return authenticateController
}