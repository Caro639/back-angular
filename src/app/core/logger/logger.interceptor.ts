import {
  HttpEvent,
  HttpInterceptorFn,
  HttpRequest,
  HttpResponse,
} from "@angular/common/http";
import { HttpHandlerFn } from "@angular/common/http";
import { Observable } from "rxjs";
import { inject } from "@angular/core";
import { LoggerService } from "./logger.service";
import { filter, tap } from "rxjs/operators";

export const loggerInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  const logger = inject(LoggerService);
  return next(req).pipe(
    filter((event) => event instanceof HttpResponse),
    tap((event) => logger.log(event))
  );
};
