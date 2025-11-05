import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import {
  provideRouter,
  withComponentInputBinding,
  withInMemoryScrolling,
} from "@angular/router";

import { routes } from "./app.routes";
import { provideHttpClient } from "@angular/common/http";
import { withInterceptors } from "@angular/common/http";
import { tokenInterceptor } from "./core/auth/token.interceptor";
import { loggerInterceptor } from "./core/logger/logger.interceptor";
import { errorInterceptor } from "./core/error-handling/error-interceptor";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({
      eventCoalescing: true,
    }),
    provideRouter(
      routes,
      withComponentInputBinding(),
      withInMemoryScrolling({
        scrollPositionRestoration: "enabled",
      })
    ),
    provideHttpClient(
      withInterceptors([tokenInterceptor, loggerInterceptor, errorInterceptor])
    ),
  ],
};
