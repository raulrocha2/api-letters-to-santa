import { IHttpResponse } from "../../protocols/i-presentation";

export const badRequest = (error: Error): IHttpResponse => ({
  statusCode: 400,
  body: error
})

export const ok = (data: any): IHttpResponse => ({
  statusCode: 200,
  body: data
});

export const created = (data: any): IHttpResponse => ({
  statusCode: 201,
  body: data
});
