import { Request, Response } from "express";
import { FindLettersApprovedUseCase } from "../../use-cases/find-approved/find-letters-approved-use-case";


export class FindLettersApprovedController {

  constructor(
    private findLettersApprovedUseCase: FindLettersApprovedUseCase
  ) { }

  async handle(req: Request, res: Response): Promise<Response> {

    const { approved } = req.body

    const result = await this.findLettersApprovedUseCase.execute(approved)

    return res.json(result)

  }
}