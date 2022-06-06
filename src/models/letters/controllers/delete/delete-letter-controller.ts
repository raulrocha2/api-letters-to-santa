import { Request, Response } from "express";
import { DeleteLetterUseCase } from "../../use-cases/delete/delete-letter-use-case";

export class DeleteLetterController {
  constructor(
    private deleteLetterUseCase: DeleteLetterUseCase
  ) { }

  async handle(req: Request, res: Response): Promise<Response> {

    const { id } = req.params;

    await this.deleteLetterUseCase.execute(id)

    return res.json({
      success: true
    })

  }
}