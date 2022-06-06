import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import auth from "../../../../config/auth";
import { SantaRepositoryInMemory } from "../../repositories-in-memory/santa-repository-in-memory";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {


  const authHeader = req.headers.authorization;


  if (!authHeader) {
    throw new Error("Token missing");
  }

  const [, token] = authHeader.split(" ");

  try {

    const santaRepository = SantaRepositoryInMemory.getInstance()
    const { sub: login } = verify(token, auth.secret_token) as IPayload;

    const santa = await santaRepository.findByLogin(login);

    // req.user = {
    //   id: santa.id
    // }

    return next();

  } catch {

    throw new Error("Invalid token!");
  }
}



