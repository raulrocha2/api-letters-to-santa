import { IHttpRequest, IHttpResponse } from "./presentation";

export interface IController {
  handle(httpRequest: IHttpRequest): Promise<IHttpResponse>;
}