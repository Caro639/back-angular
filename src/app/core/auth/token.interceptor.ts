import { HttpEvent, HttpRequest } from "@angular/common/http";
import { HttpInterceptorFn, HttpHandlerFn } from "@angular/common/http";
import { Observable } from "rxjs";
import { inject } from "@angular/core";
import { TokenService } from "./token.service";

export const tokenInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  const tokenService = inject(TokenService);
  const token = tokenService.userToken();
  console.log("Token interceptor: Adding token", token);

  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });

  console.log(
    "Token interceptor: Request headers",
    authReq.headers.get("Authorization")
  );
  return next(authReq);
};
