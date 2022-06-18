import { LetterEntity } from "../../entities/letters-entity";
import { ILetterPort } from "../../ports/letters-port";

export class FindAllLettersUseCase {

  constructor(
    private letterRepository: ILetterPort
  ) { }

  async execute(): Promise<LetterEntity[]> {

    return await this.letterRepository.findAll()
  }
}