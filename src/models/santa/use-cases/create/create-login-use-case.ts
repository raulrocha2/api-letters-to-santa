import { hash } from "bcrypt";
import { IGenerateToken } from "../../../../shared/protocols/generate-token";
import { ISantaPort } from "../../ports/santa-port";
import auth from '../../../../config/auth'


export class CreateLoginUseCase {

  constructor(
    private santaRepository: ISantaPort,
    private generateToken: IGenerateToken
  ) { }

  async execute(login: string, password: string): Promise<string> {

    const salt = 10;

    const santaExist = await this.santaRepository.findByLogin(login);

    if (santaExist) {
      throw new Error('Login Already exist')
    };

    if (!login) {
      throw new Error('Login name required')
    }

    if (!password) {
      throw new Error('Password required')
    }

    const passwordHash = await hash(password, salt);
    const secretToken = auth.secret_token;
    const expiresIn = auth.expires_in_days;

    const token = await this.generateToken.generate({ secretToken, login, expiresIn })

    await this.santaRepository.create({
      login,
      password: passwordHash,
      token
    });

    return token;

  }
}