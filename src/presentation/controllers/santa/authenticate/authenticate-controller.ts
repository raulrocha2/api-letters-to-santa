
import { AuthenticateUseCase } from "../../../../domain/santa/use-cases/authenticate/authenticate-use-case";
import { ok } from "../../../helpers/http/httpHelper";
import { IController } from "../../../protocols/i-controller";
import { IHttpRequest, IHttpResponse } from "../../../protocols/i-presentation";

export class AuthenticateController implements IController {

  constructor(
    private authenticateUseCase: AuthenticateUseCase
  ) { }

  async handle(req: IHttpRequest): Promise<IHttpResponse> {
    const { login, password } = req.body;

    const santa = await this.authenticateUseCase.execute({ login, password });
    return ok({
      'login': santa.login,
      'token': santa.token
    })
  }
}