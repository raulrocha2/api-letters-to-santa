import { LetterRepositoryInMemory } from "../../../../shared/infra/repositories-in-memory/letter-repository-in-memory";
import { MakeLetterApprovedUseCase } from "./make-letter-approved-use-case";

let letterRepositoryInMemory: LetterRepositoryInMemory;
let sut: MakeLetterApprovedUseCase;

describe("Find letters read true", () => {

  beforeAll(() => {
    letterRepositoryInMemory = LetterRepositoryInMemory.getInstance()
    sut = new MakeLetterApprovedUseCase(letterRepositoryInMemory)
  });


  test("Should be able to make letter with approved true", async () => {

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


    const letterTrue = await letterRepositoryInMemory.findByNameAndAddress({
      first_name: 'Otavio',
      last_name: 'Lemos Olarca',
      address: 'Av nove de julho 123',
      zip_code: '123-456',
    });

    await sut.execute(letterTrue.id, true)

    const lettersRead = await letterRepositoryInMemory.findApproved(true)

    expect(lettersRead.length).toBe(1)
  });


  test("Should be able to make letter with read false", async () => {


    const letterFalse = await letterRepositoryInMemory.findByNameAndAddress({
      first_name: 'Otavio',
      last_name: 'Lemos Olarca',
      address: 'Av nove de julho 123',
      zip_code: '123-456',
    });

    await sut.execute(letterFalse.id, false)

    const lettersRead = await letterRepositoryInMemory.findApproved(false)

    expect(lettersRead.length).toBe(1)
  });


});