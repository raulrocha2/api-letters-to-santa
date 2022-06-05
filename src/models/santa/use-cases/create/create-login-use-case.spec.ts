import { SantaRepositoryInMemory } from "../../../../shared/infra/repositories-in-memory/santa-repository-in-memory";
import { GenerateTokenJWT } from "../../../../shared/utils/generate-token-jwt";
import { CreateLoginUseCase } from "./create-login-use-case";


let santaRepositoryInMemory: SantaRepositoryInMemory;
let generateTokenJWT: GenerateTokenJWT;
let sut: CreateLoginUseCase;



const makeFakeAccount = async () => {
  const login = "santa.admin";
  const password = "123123";
  const expiresIn = "1d"
  const secretToken = "test-secretKeyJWT"
  const token = await generateTokenJWT.generate({ secretToken, login, expiresIn });

  return {
    login,
    password,
    token
  }
}

describe("Create Login Santa", () => {
  beforeAll(() => {
    santaRepositoryInMemory = SantaRepositoryInMemory.getInstance()
    generateTokenJWT = new GenerateTokenJWT()
    sut = new CreateLoginUseCase(santaRepositoryInMemory, generateTokenJWT)
  });

  test("Should be able to create a new login", async () => {
    const { login, password, token } = await makeFakeAccount();
    await sut.execute({
      login,
      password,
      token
    });

    const santa = await santaRepositoryInMemory.findByLogin('santa.admin');

    expect(santa).toHaveProperty('id')
  });

  test("Should not be able to create a new login with the same login", async () => {
    expect(async () => {
      const { login, password, token } = await makeFakeAccount();
      await sut.execute({
        login,
        password,
        token
      });

    }).rejects.toThrow('Login Already exist')

  });

  test("Should not be able to create a login without password", async () => {

    expect(async () => {
      const login = "s.admin"
      const password = ""
      const expiresIn = "30d"
      const secretToken = "iclubs-secretKeyJWT"
      const token = await generateTokenJWT.generate({ secretToken, login, expiresIn })

      await sut.execute({
        login,
        password,
        token
      });
    }).rejects.toThrow('Password required')

  });

  test("Should not be able to create a login without login", async () => {

    expect(async () => {
      const login = ""
      const password = "123"
      const expiresIn = "30d"
      const secretToken = "iclubs-secretKeyJWT"
      const token = await generateTokenJWT.generate({ secretToken, login, expiresIn })

      await sut.execute({
        login,
        password,
        token
      });
    }).rejects.toThrow('Login name required')

  });
})