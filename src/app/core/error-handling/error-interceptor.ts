import {
  HttpEvent,
  HttpInterceptorFn,
  HttpRequest,
  HttpHandlerFn,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { inject } from "@angular/core";
import { LoggerService } from "../logger/logger.service";
import { ModalService } from "../layout/services/modal.service";

export const errorInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  const modalService = inject(ModalService);
  const logger = inject(LoggerService);
  return next(req).pipe(
    catchError((error) => {
      modalService.toggleErrorModal();
      logger.logError(error);
      return throwError(() => error);
    })
  );
};
