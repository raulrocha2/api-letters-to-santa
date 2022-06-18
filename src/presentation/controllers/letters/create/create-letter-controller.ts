import { Request, Response } from "express";
import { CreateLetterUseCase } from "../../../../domain/letters/use-cases/create/create-letter-use-case";



export class CreateLetterController {

  constructor(
    private createLetterUseCase: CreateLetterUseCase
  ) { }

  async handle(req: Request, res: Response): Promise<Response> {

    const {
      first_name,
      last_name,
      address,
      zip_code,
      state,
      city,
      country,
      body_letter,
    } = req.body;

    await this.createLetterUseCase.execute({
      first_name,
      last_name,
      address,
      zip_code,
      state,
      city,
      country,
      body_letter,
    })


    return res.status(201).send({
      success: true
    })
  }
}