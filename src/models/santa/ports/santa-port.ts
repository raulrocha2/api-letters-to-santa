import { SantaDTO } from "../dtos/santa-dto";
import { SantaEntity } from "../entities/santa-entity";


export interface ISantaPort {
  create(data: SantaDTO): Promise<void>;
  findById(id: string): Promise<SantaEntity>;
  findByLogin(login: string): Promise<SantaEntity>;

}