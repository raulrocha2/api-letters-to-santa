import { LetterEntity } from "../../entities/letters-entity";
import { ILetterPort } from "../../ports/letters-port";

export class FindLettersReadUseCase {

  constructor(
    private letterRepository: ILetterPort
  ) { }

  async execute(was_read: boolean): Promise<LetterEntity[]> {

    return await this.letterRepository.findRead(was_read)
  }
}