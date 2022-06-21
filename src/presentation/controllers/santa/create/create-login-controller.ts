import { CreateLoginUseCase } from "../../../../domain/santa/use-cases/create/create-login-use-case";
import { badRequest, created } from "../../../helpers/http/httpHelper";
import { IController } from "../../../protocols/i-controller";
import { IHttpRequest, IHttpResponse } from "../../../protocols/i-presentation";
import { IValidation } from "../../../protocols/i-validation";

export class CreateLoginController implements IController {

  constructor(
    private createLoginUseCase: CreateLoginUseCase,
    private validation: IValidation
  ) { }

  async handle(req: IHttpRequest): Promise<IHttpResponse> {

    const error = this.validation.validate(req.body);
    if (error) {
      return badRequest(error)
    }
    const { login, password } = req.body;

    const token = await this.createLoginUseCase.execute({ login, password });
    return created({
      'token': token
    })
  }
}