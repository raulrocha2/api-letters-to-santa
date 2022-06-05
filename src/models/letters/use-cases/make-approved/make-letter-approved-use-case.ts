import { LetterEntity } from "../../entities/letters-entity";
import { ILetterPort } from "../../ports/letters-port";

export class MakeLetterApprovedUseCase {

  constructor(
    private letterRepository: ILetterPort
  ) { }

  async execute(id: string, approved: boolean): Promise<void> {

    await this.letterRepository.makeApproved(id, approved)
  }
}