import { Request, Response } from "express";
import { FindLettersApprovedUseCase } from "../../../../domain/letters/use-cases/find-approved/find-letters-approved-use-case";


export class FindLettersNotApprovedController {

  constructor(
    private findLettersApprovedUseCase: FindLettersApprovedUseCase
  ) { }

  async handle(req: Request, res: Response): Promise<Response> {

    const result = await this.findLettersApprovedUseCase.execute(false)

    return res.json(result)

  }
}