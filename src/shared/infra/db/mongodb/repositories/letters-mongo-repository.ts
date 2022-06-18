import { ObjectId } from "mongodb";
import { LetterDTO } from "../../../../../domain/letters/dtos/letter-dto";
import { LetterEntity } from "../../../../../domain/letters/entities/letters-entity";
import { ILetterPort, TypeFindLetterExist } from "../../../../../domain/letters/ports/letters-port";
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
    const letterCollection = await MongoHelper.getCollection('letters')
    const newLetter = new LetterEntity();
    Object.assign(newLetter, {
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

    const { id, ...objectWithoutId } = newLetter
    await letterCollection.insertOne(objectWithoutId)


  }

  async findByNameAndAddress({
    first_name,
    last_name,
    address,
    zip_code
  }: TypeFindLetterExist): Promise<LetterEntity> {
    const accountCollection = await MongoHelper.getCollection('letters')
    const letter = await accountCollection.findOne({
      first_name: first_name,
      last_name: last_name,
      address: address,
      zip_code: zip_code
    });

    if (letter) return MongoHelper.map(letter)
  }

  async findById(id: string): Promise<LetterEntity> {
    const santaCollection = await MongoHelper.getCollection('letters')
    try {
      const letter = await santaCollection.findOne({ "_id": new ObjectId(id) });
      if (letter) return MongoHelper.map(letter)

    } catch (error) {
      throw new Error(`Invalid Param: ${id}`)
    }
  }

  async findAll(): Promise<LetterEntity[]> {
    const letterResult: LetterEntity[] = []

    const letterCollection = await MongoHelper.getCollection('letters')
    const letters = await letterCollection.find({}).toArray()
    for (const letter of letters) {
      letterResult.push(MongoHelper.map(letter))
    }
    return letterResult
  }

  async findRead(was_read: boolean): Promise<LetterEntity[]> {
    const letterResult: LetterEntity[] = []

    const letterCollection = await MongoHelper.getCollection('letters')
    const letters = await letterCollection.find({
      was_read
    }).toArray()
    for (const letter of letters) {
      letterResult.push(MongoHelper.map(letter))
    }
    return letterResult
  }

  async findApproved(approved: boolean): Promise<LetterEntity[]> {
    const letterResult: LetterEntity[] = []

    const letterCollection = await MongoHelper.getCollection('letters')
    const letters = await letterCollection.find({
      approved
    }).toArray()
    for (const letter of letters) {
      letterResult.push(MongoHelper.map(letter))
    }
    return letterResult
  }

  async makeRead(id: string, was_read: boolean): Promise<void> {
    const letterCollection = await MongoHelper.getCollection('letters')
    await letterCollection.updateOne(
      { "_id": new ObjectId(id) },
      { $set: { was_read } }
    )
  }

  async makeApproved(id: string, approved: boolean): Promise<void> {
    const letterCollection = await MongoHelper.getCollection('letters')
    await letterCollection.updateOne(
      { "_id": new ObjectId(id) },
      { $set: { approved } }
    )
  }

  async delete(id: string): Promise<void> {
    const letterCollection = await MongoHelper.getCollection('letters')
    await letterCollection.deleteOne(
      { "_id": new ObjectId(id) }
    )
  }

}