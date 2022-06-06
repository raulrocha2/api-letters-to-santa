import "express-async-errors";
import YAML from 'yamljs';
import swaggerUi from 'swagger-ui-express';
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import { router } from "./routes";
import { join } from "path";



const app = express();

app.use(express.json());

const swaggerPath = join(__dirname, '../../../../swagger.YAML')
const swaggerFile = YAML.load(swaggerPath)

app.use('/v1/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(cors());
app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    if (err.message === "Invalid token!" || "Token missing") {
      return res.status(401).json({
        message: err.message
      })
    }
    return res.status(400).json({
      message: err.message
    })
  }
  return res.status(500).json({
    status: 'error',
    message: `Internal server error ${err}`
  })
})

export { app };