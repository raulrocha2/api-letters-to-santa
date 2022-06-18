import { LetterRepositoryInMemory } from "../../../../shared/infra/repositories-in-memory/letter-repository-in-memory";
import { FindLettersApprovedUseCase } from "./find-letters-approved-use-case";

let letterRepositoryInMemory: LetterRepositoryInMemory;
let sut: FindLettersApprovedUseCase;

describe("Find letters read true", () => {

  beforeAll(() => {
    letterRepositoryInMemory = LetterRepositoryInMemory.getInstance()
    sut = new FindLettersApprovedUseCase(letterRepositoryInMemory)
  });


  test("Should be able find all letters was approved", async () => {

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

    await letterRepositoryInMemory.makeApproved(letter1.id, true)

    const lettersRead = await sut.execute(true)

    expect(lettersRead.length).toBe(1)
  });


  test("Should be able find all letters not approved", async () => {


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

    await letterRepositoryInMemory.create({
      first_name: 'Monica',
      last_name: 'Amorin Pereira',
      address: 'Av nove de julho 123',
      zip_code: '123-456',
      state: 'SP',
      city: 'são paulo',
      country: 'Brasil',
      body_letter: 'Olá querido papai noel',
    })



    const lettersNotRead = await sut.execute(false)

    expect(lettersNotRead.length).toBe(2)
  });


});