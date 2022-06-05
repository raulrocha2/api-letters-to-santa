import { LetterRepositoryInMemory } from "../../../../shared/infra/repositories-in-memory/letter-repository-in-memory";
import { FindAllLettersUseCase } from "./find-all-letters-use-case";

let letterRepositoryInMemory: LetterRepositoryInMemory;
let sut: FindAllLettersUseCase;

describe("Find All Letters", () => {

  beforeAll(() => {
    letterRepositoryInMemory = LetterRepositoryInMemory.getInstance()
    sut = new FindAllLettersUseCase(letterRepositoryInMemory)
  });


  test("Should be able find all letters", async () => {

    await letterRepositoryInMemory.create({
      first_name: 'Carlos',
      last_name: 'Ryan',
      address: 'Av nove de julho 123',
      zip_code: '123-456',
      state: 'SP',
      city: 'são paulo',
      country: 'Brasil',
      body_letter: 'Olá querido papai noel',
    });

    await letterRepositoryInMemory.create({
      first_name: 'Marcelo',
      last_name: 'Costa',
      address: 'Av nove de julho 123',
      zip_code: '123-456',
      state: 'SP',
      city: 'são paulo',
      country: 'Brasil',
      body_letter: 'Olá querido papai noel',
    })

    await letterRepositoryInMemory.create({
      first_name: 'Anibal',
      last_name: 'Antunes da Silva',
      address: 'Av nove de julho 123',
      zip_code: '123-456',
      state: 'SP',
      city: 'são paulo',
      country: 'Brasil',
      body_letter: 'Olá querido papai noel',
    })

    const letters = await sut.execute()

    expect(letters.length).toBe(3)
  });

});