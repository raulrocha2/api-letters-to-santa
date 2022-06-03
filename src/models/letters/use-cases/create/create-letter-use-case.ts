import { LetterDTO } from "../../dtos/letter-dto";
import { ILetterPort } from "../../ports/letters-port";

export class CreateLetterUseCase {
  constructor(
    private letterRepository: ILetterPort
  ) { }

  async execute({
    first_name,
    last_name,
    address,
    zip_code,
    state,
    city,
    country,
    body_letter,
  }: LetterDTO): Promise<void> {

    const letterExists = await this.letterRepository.findByNameAndAddress({
      first_name,
      last_name,
      address,
      zip_code
    });

    if (letterExists) {
      throw new Error('You can just send one letter per year')
    };

    await this.letterRepository.create({
      first_name,
      last_name,
      address,
      zip_code,
      state,
      city,
      country,
      body_letter,
    });

  }
}