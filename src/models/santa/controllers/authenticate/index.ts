import { SantaRepositoryInMemory } from "../../../../shared/infra/repositories-in-memory/santa-repository-in-memory";
import { GenerateTokenJWT } from "../../../../shared/utils/generate-token-jwt";
import { AuthenticateUseCase } from "../../use-cases/authenticate/authenticate-use-case";
import { AuthenticateController } from "./authenticate-controller";


export default () => {
  const generateTokenJWT = new GenerateTokenJWT();
  const santaRepositoryInMemory = SantaRepositoryInMemory.getInstance();
  const authenticateUseCase = new AuthenticateUseCase(santaRepositoryInMemory, generateTokenJWT);
  const authenticateController = new AuthenticateController(authenticateUseCase);
  return authenticateController
}