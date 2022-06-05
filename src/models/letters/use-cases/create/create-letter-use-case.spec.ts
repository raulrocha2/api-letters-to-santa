import { LetterRepositoryInMemory } from "../../../../shared/infra/repositories-in-memory/letter-repository-in-memory";
import { CreateLetterUseCase } from "./create-letter-use-case";


let letterRepositoryInMemory: LetterRepositoryInMemory;
let sut: CreateLetterUseCase;

describe("Create Letter", () => {

  beforeAll(() => {
    letterRepositoryInMemory = LetterRepositoryInMemory.getInstance()
    sut = new CreateLetterUseCase(letterRepositoryInMemory)
  });


  test("Should be able to create a new letter", async () => {

    await sut.execute({
      first_name: 'Carlos',
      last_name: 'Ryan',
      address: 'Av nove de julho 123',
      zip_code: '123-456',
      state: 'SP',
      city: 'são paulo',
      country: 'Brasil',
      body_letter: 'Olá querido papai noel',
    });

    const letterCreated = await letterRepositoryInMemory.findByNameAndAddress({
      first_name: 'Carlos',
      last_name: 'Ryan',
      address: 'Av nove de julho 123',
      zip_code: '123-456',
    })
    expect(letterCreated).toHaveProperty('id')
  })


  test("Should not be able to create a new letter if already exist", async () => {

    expect(async () => {

      await sut.execute({
        first_name: 'Carlos',
        last_name: 'Ryan',
        address: 'Av nove de julho 123',
        zip_code: '123-456',
        state: 'SP',
        city: 'são paulo',
        country: 'Brasil',
        body_letter: 'Olá querido papai noel',
      });

    }).rejects.toBeInstanceOf(Error)
  });

});