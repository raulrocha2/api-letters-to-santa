import { Request, Response } from "express";
import { FindLettersApprovedUseCase } from "../../use-cases/find-approved/find-letters-approved-use-case";
import { FindLettersReadUseCase } from "../../use-cases/find-read/find-letters-read-use-case";


export class FindLettersReadController {

  constructor(
    private findLettersReadUseCase: FindLettersReadUseCase
  ) { }

  async handle(req: Request, res: Response): Promise<Response> {

    const { approved } = req.body

    const result = await this.findLettersReadUseCase.execute(approved)

    return res.json(result)

  }
}