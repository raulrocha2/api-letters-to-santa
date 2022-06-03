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

  test("Should be able find all letters not read", async () => {

    await sut.execute({
      first_name: 'Marcelo',
      last_name: 'Costa',
      address: 'Av nove de julho 123',
      zip_code: '123-456',
      state: 'SP',
      city: 'são paulo',
      country: 'Brasil',
      body_letter: 'Olá querido papai noel',
    })

    const lettersNotRead = await letterRepositoryInMemory.findRead(false)

    expect(lettersNotRead.length).toBe(2)
  });

  test("Should be able find all letters was read", async () => {

    await sut.execute({
      first_name: 'Otavio',
      last_name: 'Lemos Olarca',
      address: 'Av nove de julho 123',
      zip_code: '123-456',
      state: 'SP',
      city: 'são paulo',
      country: 'Brasil',
      body_letter: 'Olá querido papai noel',
    })

    await sut.execute({
      first_name: 'Edilson',
      last_name: 'Almeida',
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


    const letter2 = await letterRepositoryInMemory.findByNameAndAddress({
      first_name: 'Edilson',
      last_name: 'Almeida',
      address: 'Av nove de julho 123',
      zip_code: '123-456',
    })

    await letterRepositoryInMemory.makeRead(letter1.id, true)

    await letterRepositoryInMemory.makeRead(letter2.id, true)

    const lettersRead = await letterRepositoryInMemory.findRead(true)

    expect(lettersRead.length).toBe(2)
  });


  test("Should be able find all letters not read", async () => {


    const lettersNotRead = await letterRepositoryInMemory.findRead(false)

    expect(lettersNotRead.length).toBe(2)
  });

  test("Should be able find all letters approved", async () => {

    const letter1 = await letterRepositoryInMemory.findByNameAndAddress({
      first_name: 'Marcelo',
      last_name: 'Costa',
      address: 'Av nove de julho 123',
      zip_code: '123-456',
    });


    const letter2 = await letterRepositoryInMemory.findByNameAndAddress({
      first_name: 'Carlos',
      last_name: 'Ryan',
      address: 'Av nove de julho 123',
      zip_code: '123-456',
    })

    await letterRepositoryInMemory.makeApproved(letter1.id, true)

    await letterRepositoryInMemory.makeApproved(letter2.id, true)

    const lettersApproved = await letterRepositoryInMemory.findApproved(true)

    expect(lettersApproved.length).toBe(2)
  });
});