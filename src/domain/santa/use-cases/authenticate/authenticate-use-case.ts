import { compare } from "bcrypt";
import auth from "../../../../config/auth";
import { IGenerateToken } from "../../../../presentation/protocols/i-generate-token";
import { SantaDTO } from "../../dtos/santa-dto";
import { ISantaPort } from "../../ports/santa-port";

interface IResponse {
  login: string,
  token: string
}

export class AuthenticateUseCase {

  constructor(
    private santaRepository: ISantaPort,
    private generateToken: IGenerateToken
  ) { }

  async execute({ login, password }: SantaDTO): Promise<IResponse> {

    const santa = await this.santaRepository.findByLogin(login);

    if (!santa) {
      throw new Error('Login or Password Invalid !')
    }

    const passwordMath = await compare(password, santa.password);

    if (!passwordMath) {
      throw new Error('Login or Password Invalid !')
    }

    const secretToken = auth.secret_token;
    const expiresIn = auth.expires_in_days;

    const newToken = await this.generateToken.generate({ secretToken, login, expiresIn });

    await this.santaRepository.updateToken(santa.id, newToken);

    return {
      login: santa.login,
      token: newToken
    }
  }
}