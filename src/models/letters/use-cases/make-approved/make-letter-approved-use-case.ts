import { ILetterPort } from "../../ports/letters-port";

export class MakeLetterApprovedUseCase {

  constructor(
    private letterRepository: ILetterPort
  ) { }

  async execute(id: string, approved: boolean): Promise<void> {

    const letterExists = await this.letterRepository.findById(id);

    if (!letterExists) {
      throw new Error(`Letter ID: ${id} not found !`)
    };

    await this.letterRepository.makeApproved(id, approved)
  }
}