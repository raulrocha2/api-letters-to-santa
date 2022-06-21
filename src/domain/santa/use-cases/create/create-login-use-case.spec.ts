import { MongoHelper } from "../../../../shared/infra/db/mongodb/helpers/mongoHelper";
import { SantaMongoRepository } from "../../../../shared/infra/db/mongodb/repositories/santa-mongo-repository";
import { GenerateTokenJWT } from "../../../../shared/utils/generate-token-jwt";
import { SantaDTO } from "../../dtos/santa-dto";
import { CreateLoginUseCase } from "./create-login-use-case";


let santaMongoRepository: SantaMongoRepository;
let generateTokenJWT: GenerateTokenJWT;
let sut: CreateLoginUseCase;



const makeFakeAccount = (): SantaDTO => {
  const login = "santa.admin";
  const password = "123123";

  return {
    login,
    password
  }
}

describe("Create Login Santa", () => {

  beforeAll(async () => {
    await MongoHelper.connect('mongodb://localhost:27017/db-letter-to-santa-test')

  });

  afterAll(async () => {
    const santaCollection = await MongoHelper.getCollection('santa')
    await santaCollection.deleteMany({})
    await MongoHelper.disconnect()
  });


  const makeSut = () => {
    santaMongoRepository = new SantaMongoRepository()
    generateTokenJWT = new GenerateTokenJWT()
    sut = new CreateLoginUseCase(santaMongoRepository, generateTokenJWT)
    return { sut }
  }

  test("Should be able to create a new login", async () => {
    const { login, password } = makeFakeAccount();
    const { sut } = makeSut()
    await sut.execute({
      login,
      password
    });

    const santa = await santaMongoRepository.findByLogin('santa.admin');

    expect(santa).toHaveProperty('id')
  });

  test("Should not be able to create a new login with the same login", async () => {
    expect(async () => {
      const { login, password } = makeFakeAccount();
      const { sut } = makeSut();
      await sut.execute({
        login,
        password
      });

    }).rejects.toThrow()

  });

})