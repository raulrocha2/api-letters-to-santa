import { Request, Response } from "express";
import { CreateLoginUseCase } from "../../../../domain/santa/use-cases/create/create-login-use-case";
import { created } from "../../../helpers/http/httpHelper";
import { IController } from "../../../protocols/i-controller";
import { IHttpRequest, IHttpResponse } from "../../../protocols/i-presentation";

export class CreateLoginController implements IController {

  constructor(
    private createLoginUseCase: CreateLoginUseCase
  ) { }

  async handle(req: IHttpRequest): Promise<IHttpResponse> {
    const { login, password } = req.body;

    const token = await this.createLoginUseCase.execute({ login, password });
    return created({
      'token': token
    })
  }
}