import { ILetterPort } from "../../ports/letters-port";


export class DeleteLetterUseCase {

  constructor(
    private letterRepository: ILetterPort
  ) { }

  async execute(id: string): Promise<void> {

    const letterExists = await this.letterRepository.findById(id);

    if (!letterExists) {
      throw new Error(`Letter ID: ${id} not found !`)
    };


    await this.letterRepository.delete(id)
  }

}