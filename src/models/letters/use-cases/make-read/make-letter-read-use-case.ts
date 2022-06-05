import { LetterEntity } from "../../entities/letters-entity";
import { ILetterPort } from "../../ports/letters-port";

export class MakeLetterReadUseCase {

  constructor(
    private letterRepository: ILetterPort
  ) { }

  async execute(id: string, was_read: boolean): Promise<void> {

    await this.letterRepository.makeRead(id, was_read)
  }
}