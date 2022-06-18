import { IHttpRequest, IHttpResponse } from "./i-presentation";

export interface IController {
  handle(httpRequest: IHttpRequest): Promise<IHttpResponse>;
}