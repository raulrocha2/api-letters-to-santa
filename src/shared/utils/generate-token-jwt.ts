import { IGenerateToken, UserToken } from "../protocols/generate-token";
import { sign } from "jsonwebtoken";

export class GenerateTokenJWT implements IGenerateToken {

  async generate({ secretToken, login, expiresIn }: UserToken): Promise<string> {

    const token = sign({ login }, secretToken, {
      subject: login,
      expiresIn
    })

    return token;
  }

}