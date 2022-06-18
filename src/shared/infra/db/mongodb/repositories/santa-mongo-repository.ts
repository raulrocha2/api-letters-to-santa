import { ObjectId } from "mongodb";
import { SantaDTO } from "../../../../../domain/santa/dtos/santa-dto";
import { SantaEntity } from "../../../../../domain/santa/entities/santa-entity";
import { ISantaPort } from "../../../../../domain/santa/ports/santa-port";
import { MongoHelper } from "../helpers/mongoHelper";


export class SantaMongoRepository implements ISantaPort {

  async create({
    login,
    password,
    token,
  }: SantaDTO): Promise<void> {
    const santaCollection = await MongoHelper.getCollection('santa')
    const newSanta = new SantaEntity();
    Object.assign(newSanta, {
      login,
      password,
      token,
      created_at: new Date()
    });

    const { id, ...objectWithoutId } = newSanta
    await santaCollection.insertOne(objectWithoutId)
  }

  async updateToken(id: string, token: string): Promise<void> {
    const santaCollection = await MongoHelper.getCollection('santa')
    await santaCollection.updateOne(
      { "_id": new ObjectId(id) },
      { $set: { token } }
    )
  }


  async findById(id: string): Promise<SantaEntity> {
    const santaCollection = await MongoHelper.getCollection('santa')
    try {
      const santa = await santaCollection.findOne({ "_id": new ObjectId(id) });
      if (santa) return MongoHelper.map(santa)

    } catch (error) {
      throw new Error(`Invalid Param: ${id}`)
    }
  }

  async findByLogin(login: string): Promise<SantaEntity> {
    const santaCollection = await MongoHelper.getCollection('santa')
    const santa = await santaCollection.findOne({ login })
    if (santa) return MongoHelper.map(santa)
  }
}

