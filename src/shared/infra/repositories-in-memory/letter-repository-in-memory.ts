import { LetterDTO } from "../../../domain/letters/dtos/letter-dto";
import { LetterEntity } from "../../../domain/letters/entities/letters-entity";
import { ILetterPort, TypeFindLetterExist } from "../../../domain/letters/ports/letters-port";


export class LetterRepositoryInMemory implements ILetterPort {

  private letters: LetterEntity[] = [];

  private static INSTANCE: LetterRepositoryInMemory;

  private constructor() {
    this.letters = [];
  }

  public static getInstance(): LetterRepositoryInMemory {
    if (!LetterRepositoryInMemory.INSTANCE) {
      LetterRepositoryInMemory.INSTANCE = new LetterRepositoryInMemory()
    }
    return LetterRepositoryInMemory.INSTANCE;
  }


  async create({
    first_name,
    last_name,
    address,
    zip_code,
    state,
    city,
    country,
    body_letter
  }: LetterDTO): Promise<void> {
    const letter = new LetterEntity();
    Object.assign(letter, {
      first_name,
      last_name,
      address,
      zip_code,
      state,
      city,
      country,
      body_letter,
      create_at: new Date()
    })
    this.letters.push(letter)
  }

  async findById(id: string): Promise<LetterEntity> {
    return this.letters.find((letter) => letter.id === id)
  }


  async findByNameAndAddress({
    first_name,
    last_name,
    address,
    zip_code
  }: TypeFindLetterExist): Promise<LetterEntity> {

    const letter = this.letters.find((letter) => (
      letter.first_name === first_name &&
      letter.last_name === last_name &&
      letter.address === address &&
      letter.zip_code === zip_code
    ))
    return letter

  }

  async findAll(): Promise<LetterEntity[]> {
    return this.letters;
  }

  async findRead(was_read: boolean): Promise<LetterEntity[]> {
    const letters = this.letters.filter((letter) => (
      letter.was_read === was_read
    ))

    return letters
  }

  async findApproved(approved: boolean): Promise<LetterEntity[]> {

    const letters = this.letters.filter((letter) => (
      letter.approved === approved
    ))

    return letters
  }

  async makeRead(id: string, was_read: boolean): Promise<void> {
    const findIndex = this.letters.findIndex((letter) => letter.id === id);
    this.letters[findIndex].was_read = was_read;
  }

  async makeApproved(id: string, approved: boolean): Promise<void> {
    const findIndex = this.letters.findIndex((letter) => letter.id === id);
    this.letters[findIndex].approved = approved;
  }

  async delete(id: string): Promise<void> {
    const index = this.letters.findIndex((letter) => letter.id === id);
    this.letters.splice(index, 1)
  }



}