import { ILetterPort } from "../../ports/letters-port";

export class MakeLetterReadUseCase {

  constructor(
    private letterRepository: ILetterPort
  ) { }

  async execute(id: string, was_read: boolean): Promise<void> {

    const letterExists = await this.letterRepository.findById(id);

    if (!letterExists) {
      throw new Error(`Letter ID: ${id} not found !`)
    };

    await this.letterRepository.makeRead(id, was_read)
  }
}