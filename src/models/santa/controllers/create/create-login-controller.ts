import { Request, Response } from "express";
import { CreateLoginUseCase } from "../../use-cases/create/create-login-use-case";

export class CreateLoginController {

  constructor(
    private createLoginUseCase: CreateLoginUseCase
  ) { }

  async handle(req: Request, res: Response): Promise<Response> {
    const { login, password } = req.body;

    const token = await this.createLoginUseCase.execute(login, password);
    return res.status(201).send({
      'token': token
    })
  }
}