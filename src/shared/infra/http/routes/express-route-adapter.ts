import { Request, Response } from "express";
import { IController } from "../../../../presentation/protocols/i-controller";
import { IHttpRequest } from "../../../../presentation/protocols/i-presentation";


export const expressRouteAdapter = (controller: IController) => {
  return async (req: Request, res: Response) => {
    const httpRequest: IHttpRequest = {
      body: req.body
    }

    const httpResponse = await controller.handle(httpRequest)

    if (httpResponse.statusCode === 200) {
      res.status(httpResponse.statusCode).send(httpResponse.body)
    }
    else if (httpResponse.statusCode === 201) {
      res.status(httpResponse.statusCode).send(httpResponse.body)
    }
    else {
      res.status(httpResponse.statusCode).json({
        error: httpResponse.body.message
      })
    }
  }
}