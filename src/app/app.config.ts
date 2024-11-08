  import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
  import { provideRouter, withEnabledBlockingInitialNavigation } from '@angular/router';

  import { routes } from './app.routes';
  import { provideAnimations } from '@angular/platform-browser/animations';

  export const appConfig = {
    providers: [
      provideRouter(routes, withEnabledBlockingInitialNavigation()),
      provideAnimations(),
      provideZoneChangeDetection(),
      // Outros providers que você precisar adicionar
    ],
  };
