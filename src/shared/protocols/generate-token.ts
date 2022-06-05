
export type UserToken = {
  secretToken: string;
  login: string;
  expiresIn: string;
}

export interface IGenerateToken {
  generate({ secretToken, login, expiresIn }: UserToken): Promise<string>;
}