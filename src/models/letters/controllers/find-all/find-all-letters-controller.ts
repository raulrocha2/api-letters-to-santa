import { Request, Response } from "express";
import { FindAllLettersUseCase } from "../../use-cases/find-all/find-all-letters-use-case";


export class FindAllLettersController {

  constructor(
    private findAllLettersUseCase: FindAllLettersUseCase
  ) { }

  async handle(req: Request, res: Response): Promise<Response> {

    const result = await this.findAllLettersUseCase.execute()

    return res.json(result)

  }
}