import { Request, Response } from "express";
import { FindLettersReadUseCase } from "../../use-cases/find-read/find-letters-read-use-case";



export class FindLettersNotReadController {

  constructor(
    private findLettersReadUseCase: FindLettersReadUseCase
  ) { }

  async handle(req: Request, res: Response): Promise<Response> {

    const result = await this.findLettersReadUseCase.execute(false)

    return res.json(result)

  }
}