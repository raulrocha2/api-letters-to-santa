import { SantaRepositoryInMemory } from "../../../../shared/infra/repositories-in-memory/santa-repository-in-memory";
import { GenerateTokenJWT } from "../../../../shared/utils/generate-token-jwt";
import { CreateLoginUseCase } from "../../use-cases/create/create-login-use-case"
import { CreateLoginController } from "./create-login-controller";

export default () => {
  const generateTokenJWT = new GenerateTokenJWT();
  const santaRepositoryInMemory = SantaRepositoryInMemory.getInstance();
  const createLoginUseCase = new CreateLoginUseCase(santaRepositoryInMemory, generateTokenJWT);
  const createLoginController = new CreateLoginController(createLoginUseCase);
  return createLoginController
}