import { ILetterPort } from "../../ports/letters-port";


export class DeleteLetterUseCase {

  constructor(
    private letterRepository: ILetterPort
  ) { }

  async execute(id: string): Promise<void> {

    await this.letterRepository.delete(id)
  }

}