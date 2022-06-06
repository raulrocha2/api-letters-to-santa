import { GenerateTokenJWT } from "./generate-token-jwt"
import jsonwebtoken from "jsonwebtoken";


const secretToken = 'any-secret'
const login = 'any-login'
const expiresIn = 'any-date'

jest.mock('jsonwebtoken', () => ({
  async sign(): Promise<string> {
    return new Promise(resolve => resolve('token-to-mock-123456789'))
  }
}))


const makeSut = (): GenerateTokenJWT => {
  return new GenerateTokenJWT()
}

describe("Jsonwebtoken Adapter", () => {

  test("Should call jsonwebtoken with correct values ", async () => {
    const sut = makeSut()
    const jwtSpy = jest.spyOn(jsonwebtoken, 'sign')
    await sut.generate({ secretToken, login, expiresIn })
    expect(jwtSpy).toHaveBeenCalledWith({ "login": "any-login" }, "any-secret", { "expiresIn": "any-date", "subject": "any-login" })
  });

  test("Should return a token on success", async () => {
    const sut = makeSut();

    const tokenCreated = await sut.generate({ secretToken, login, expiresIn })
    expect(tokenCreated).toBe('token-to-mock-123456789')
  });

  test('Should throw if Jsonwebtoken throws Error', async () => {
    const sut = makeSut()
    jest.spyOn(jsonwebtoken, 'sign').mockImplementationOnce(
      () => { throw new Error }
    )
    const promise = sut.generate({ secretToken, login, expiresIn })
    await expect(promise).rejects.toThrow()
  });


})