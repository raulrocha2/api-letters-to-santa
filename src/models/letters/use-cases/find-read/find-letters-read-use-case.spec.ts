import { LetterRepositoryInMemory } from "../../../../shared/infra/repositories-in-memory/letter-repository-in-memory";
import { FindLettersReadUseCase } from "./find-letters-read-use-case";

let letterRepositoryInMemory: LetterRepositoryInMemory;
let sut: FindLettersReadUseCase;

describe("Find letters read true", () => {

  beforeAll(() => {
    letterRepositoryInMemory = LetterRepositoryInMemory.getInstance()
    sut = new FindLettersReadUseCase(letterRepositoryInMemory)
  });


  test("Should be able find all letters was read", async () => {

    await letterRepositoryInMemory.create({
      first_name: 'Otavio',
      last_name: 'Lemos Olarca',
      address: 'Av nove de julho 123',
      zip_code: '123-456',
      state: 'SP',
      city: 'são paulo',
      country: 'Brasil',
      body_letter: 'Olá querido papai noel',
    })


    const letter1 = await letterRepositoryInMemory.findByNameAndAddress({
      first_name: 'Otavio',
      last_name: 'Lemos Olarca',
      address: 'Av nove de julho 123',
      zip_code: '123-456',
    });

    await letterRepositoryInMemory.makeRead(letter1.id, true)

    const lettersRead = await sut.execute(true)

    expect(lettersRead.length).toBe(1)
  });


  test("Should be able find all letters not read", async () => {


    await letterRepositoryInMemory.create({
      first_name: 'Edilson',
      last_name: 'Almeida',
      address: 'Av nove de julho 123',
      zip_code: '123-456',
      state: 'SP',
      city: 'são paulo',
      country: 'Brasil',
      body_letter: 'Olá querido papai noel',
    })


    const lettersNotRead = await sut.execute(false)

    expect(lettersNotRead.length).toBe(1)
  });


});