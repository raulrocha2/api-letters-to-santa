import { hash } from "bcrypt";
import { MongoHelper } from "../../../../shared/infra/db/mongodb/helpers/mongoHelper";
import { SantaMongoRepository } from "../../../../shared/infra/db/mongodb/repositories/santa-mongo-repository";
import { SantaRepositoryInMemory } from "../../../../shared/infra/repositories-in-memory/santa-repository-in-memory";
import { GenerateTokenJWT } from "../../../../shared/utils/generate-token-jwt";
import { AuthenticateUseCase } from "./authenticate-use-case";


type SutTypes = {
  santaMongoRepository: SantaMongoRepository;
  sut: AuthenticateUseCase
}

const makeSut = (): SutTypes => {
  const santaMongoRepository = new SantaMongoRepository()
  const generateTokenJWT = new GenerateTokenJWT()
  const sut = new AuthenticateUseCase(santaMongoRepository, generateTokenJWT)
  return { sut, santaMongoRepository }
}

describe("Authenticate", () => {

  beforeAll(async () => {
    await MongoHelper.connect('mongodb://localhost:27017/db-letter-to-santa-test')

  });

  afterAll(async () => {
    const santaCollection = await MongoHelper.getCollection('santa')
    await santaCollection.deleteMany({})
    await MongoHelper.disconnect()
  });


  test("Should be able to authenticate", async () => {
    const { sut, santaMongoRepository } = makeSut()
    const password = await hash('password123', 8);

    await santaMongoRepository.create({
      login: 'admin',
      password,
      token: ''
    })

    const { login, token } = await sut.execute({
      login: 'admin',
      password: 'password123'
    })

    expect(login).toBe('admin');
    expect(token).not.toBe('')
  });

  test("Should not be able to authenticate with wrong password", async () => {

    expect(async () => {
      const { sut } = makeSut()
      await sut.execute({
        login: 'admin',
        password: ''
      });

    }).rejects.toThrow('Login or Password Invalid !')
  });

  test("Should not be able to authenticate with wrong login", async () => {

    expect(async () => {
      const { sut } = makeSut()
      await sut.execute({
        login: 'wrong-login',
        password: 'password123'
      });

    }).rejects.toThrow('Login or Password Invalid !')
  });


})