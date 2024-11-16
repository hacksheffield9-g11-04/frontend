import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './shared/interceptors/auth.interceptor';

const serverConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([authInterceptor])),
    provideServerRendering(),
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
