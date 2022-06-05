import { Request, Response } from "express";
import { AuthenticateUseCase } from "../../use-cases/authenticate/authenticate-use-case";

export class AuthenticateController {

  constructor(
    private authenticateUseCase: AuthenticateUseCase
  ) { }

  async handle(req: Request, res: Response): Promise<Response> {
    const { login, password } = req.body;

    const santa = await this.authenticateUseCase.execute(login, password);
    return res.status(200).send({
      'login': santa.login,
      'token': santa.token
    })
  }
}