import { LetterEntity } from "../../entities/letters-entity";
import { ILetterPort } from "../../ports/letters-port";

export class FindLettersApprovedUseCase {

  constructor(
    private letterRepository: ILetterPort
  ) { }

  async execute(approved: boolean): Promise<LetterEntity[]> {

    return await this.letterRepository.findApproved(approved)
  }
}