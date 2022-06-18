import { Request, Response } from "express";
import { MakeLetterReadUseCase } from "../../../../domain/letters/use-cases/make-read/make-letter-read-use-case";


export class MakeLetterReadController {

  constructor(
    private makeLetterReadUseCase: MakeLetterReadUseCase
  ) { }

  async handle(req: Request, res: Response): Promise<Response> {

    const { id } = req.params;
    const { read } = req.body;

    await this.makeLetterReadUseCase.execute(id, read)

    return res.json({
      success: true
    })

  }
}