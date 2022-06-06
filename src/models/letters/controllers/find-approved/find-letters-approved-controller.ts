import { Request, Response } from "express";
import { FindLettersApprovedUseCase } from "../../use-cases/find-approved/find-letters-approved-use-case";


export class FindLettersApprovedController {

  constructor(
    private findLettersApprovedUseCase: FindLettersApprovedUseCase
  ) { }

  async handle(req: Request, res: Response): Promise<Response> {

    const result = await this.findLettersApprovedUseCase.execute(true)

    return res.json(result)

  }
}