import { Request, Response } from "express";
import { MakeLetterApprovedUseCase } from "../../use-cases/make-approved/make-letter-approved-use-case";


export class MakeLetterApprovedController {

  constructor(
    private makeLetterApprovedUseCase: MakeLetterApprovedUseCase
  ) { }

  async handle(req: Request, res: Response): Promise<Response> {

    const { id } = req.params;
    const { approved } = req.body;

    await this.makeLetterApprovedUseCase.execute(id, approved)

    return res.json({
      success: true
    })

  }
}