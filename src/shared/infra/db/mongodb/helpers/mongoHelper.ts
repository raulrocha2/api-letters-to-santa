import { Collection, MongoClient } from "mongodb";

export const MongoHelper = {
  mongoCLient: null as MongoClient,
  uri: null as string,

  async connect(uri: string): Promise<void> {
    this.uri = uri,
      this.mongoCLient = await MongoClient.connect(uri)
  },

  async disconnect(): Promise<void> {
    await this.mongoCLient.close()
  },

  async getCollection(name: string): Promise<Collection> {
    if (!this.mongoCLient) {
      await this.mongoCLient.connect(this.uri)
    }
    return this.mongoCLient.db().collection(name)
  },

  map(collection: any): any {

    const { _id, ...objectWithoutId } = collection

    return Object.assign({}, objectWithoutId, {
      id: _id
    })
  }
}

