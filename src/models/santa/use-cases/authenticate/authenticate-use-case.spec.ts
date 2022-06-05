import { hash } from "bcrypt";
import { SantaRepositoryInMemory } from "../../../../shared/infra/repositories-in-memory/santa-repository-in-memory";
import { GenerateTokenJWT } from "../../../../shared/utils/generate-token-jwt";
import { AuthenticateUseCase } from "./authenticate-use-case";


let santaRepositoryInMemory: SantaRepositoryInMemory;
let generateTokenJWT: GenerateTokenJWT;
let sut: AuthenticateUseCase;


describe("Authenticate", () => {
  beforeAll(() => {
    santaRepositoryInMemory = SantaRepositoryInMemory.getInstance()
    generateTokenJWT = new GenerateTokenJWT()
    sut = new AuthenticateUseCase(santaRepositoryInMemory, generateTokenJWT)
  });

  test("Should be able to authenticate", async () => {

    const password = await hash('password123', 8);

    await santaRepositoryInMemory.create({
      login: 'admin',
      password,
      token: ''
    })

    const { login, token } = await sut.execute('admin', 'password123')

    expect(login).toBe('admin');
    expect(token).not.toBe('')
  });

  test("Should not be able to authenticate with wrong password", async () => {

    expect(async () => {
      await sut.execute(
        'admin',
        'wrong-password'
      );

    }).rejects.toThrow('Login or Password Invalid !')
  });

  test("Should not be able to authenticate with wrong login", async () => {

    expect(async () => {
      await sut.execute(
        'wrong-login',
        'password123'
      );

    }).rejects.toThrow('Login or Password Invalid !')
  });


})