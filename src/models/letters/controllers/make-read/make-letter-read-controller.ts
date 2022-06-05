import { Request, Response } from "express";
import { MakeLetterReadUseCase } from "../../use-cases/make-read/make-letter-read-use-case";


export class MakeLetterReadController {

  constructor(
    private makeLetterReadUseCase: MakeLetterReadUseCase
  ) { }

  async handle(req: Request, res: Response): Promise<Response> {

    const { id } = req.params;
    const { approved } = req.body;

    await this.makeLetterReadUseCase.execute(id, approved)

    return res.json({
      success: true
    })

  }
}