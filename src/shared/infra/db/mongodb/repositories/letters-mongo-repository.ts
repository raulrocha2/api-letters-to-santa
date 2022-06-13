import { LetterDTO } from "../../../../../models/letters/dtos/letter-dto";
import { LetterEntity } from "../../../../../models/letters/entities/letters-entity";
import { ILetterPort, TypeFindLetterExist } from "../../../../../models/letters/ports/letters-port";
import { MongoHelper } from "../helpers/mongoHelper";

export class LettersMongoRepository implements ILetterPort {

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
    const accountCollection = await MongoHelper.getCollection('letters')
    await accountCollection.insertOne({
      first_name,
      last_name,
      address,
      zip_code,
      state,
      city,
      country,
      body_letter,
      was_read: false,
      approved: false,

      created_at: new Date()
    })

  }

  findByNameAndAddress(data: TypeFindLetterExist): Promise<LetterEntity> {
    throw new Error("Method not implemented.");
  }
  findById(id: string): Promise<LetterEntity> {
    throw new Error("Method not implemented.");
  }
  findAll(): Promise<LetterEntity[]> {
    throw new Error("Method not implemented.");
  }
  findRead(was_read: boolean): Promise<LetterEntity[]> {
    throw new Error("Method not implemented.");
  }
  findApproved(approved: boolean): Promise<LetterEntity[]> {
    throw new Error("Method not implemented.");
  }
  makeRead(id: string, was_read: boolean): Promise<void> {
    throw new Error("Method not implemented.");
  }
  makeApproved(id: string, approved: boolean): Promise<void> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }

}