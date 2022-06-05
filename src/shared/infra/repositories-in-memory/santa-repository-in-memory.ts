import { SantaDTO } from "../../../models/santa/dtos/santa-dto";
import { SantaEntity } from "../../../models/santa/entities/santa-entity";
import { ISantaPort } from "../../../models/santa/ports/santa-port";

export class SantaRepositoryInMemory implements ISantaPort {

  private admins: SantaEntity[] = [];

  private static INSTANCE: SantaRepositoryInMemory;

  private constructor() {
    this.admins
      = [];
  }

  public static getInstance(): SantaRepositoryInMemory {
    if (!SantaRepositoryInMemory.INSTANCE) {
      SantaRepositoryInMemory.INSTANCE = new SantaRepositoryInMemory()
    }
    return SantaRepositoryInMemory.INSTANCE;
  }

  async create({
    login,
    password,
    token,
  }: SantaDTO): Promise<void> {
    const santa = new SantaEntity();
    Object.assign(santa, {
      login,
      password,
      token,
      created_at: new Date()
    });
    this.admins.push(santa)
  }

  async updateToken(id: string, token: string): Promise<void> {
    const index = this.admins.findIndex((santa) => santa.id === id);
    this.admins[index].token = token;
  }


  async findById(id: string): Promise<SantaEntity> {
    return this.admins.find((santa) => santa.id === id)
  }

  async findByLogin(login: string): Promise<SantaEntity> {
    return this.admins.find((santa) => santa.login === login)
  }

}