import { LetterDTO } from "../dtos/letter-dto";
import { LetterEntity } from "../entities/letters-entity";

export type TypeFindLetterExist = {
  first_name: string;
  last_name: string;
  address: string;
  zip_code: string;
}

export interface ILetterPort {

  create(data: LetterDTO): Promise<void>;
  findByNameAndAddress({ first_name, last_name, address, zip_code }: TypeFindLetterExist): Promise<LetterEntity>;
  findById(id: string): Promise<LetterEntity>;
  findAll(): Promise<LetterEntity[]>;
  findRead(was_read: boolean): Promise<LetterEntity[]>;
  findApproved(approved: boolean): Promise<LetterEntity[]>;
  makeRead(id: string, was_read: boolean): Promise<void>;
  makeApproved(id: string, approved: boolean): Promise<void>;

}