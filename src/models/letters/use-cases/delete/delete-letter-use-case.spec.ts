import { LetterRepositoryInMemory } from "../../../../shared/infra/repositories-in-memory/letter-repository-in-memory";
import { DeleteLetterUseCase } from "./delete-letter-use-case";

let letterRepositoryInMemory: LetterRepositoryInMemory;
let sut: DeleteLetterUseCase;

describe("Delete Letter", () => {

  beforeAll(() => {
    letterRepositoryInMemory = LetterRepositoryInMemory.getInstance()
    sut = new DeleteLetterUseCase(letterRepositoryInMemory)
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
    });

    await letterRepositoryInMemory.create({
      first_name: 'Caio',
      last_name: 'Dionisio',
      address: 'Av nove de julho 123',
      zip_code: '123-456',
      state: 'SP',
      city: 'são paulo',
      country: 'Brasil',
      body_letter: 'Olá querido papai noel',
    });


    const letter1 = await letterRepositoryInMemory.findByNameAndAddress({
      first_name: 'Otavio',
      last_name: 'Lemos Olarca',
      address: 'Av nove de julho 123',
      zip_code: '123-456',
    });

    await letterRepositoryInMemory.delete(letter1.id)

    const letters = await letterRepositoryInMemory.findAll()

    expect(letters.length).toBe(1)
  });


});