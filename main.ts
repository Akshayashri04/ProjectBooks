import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { routes } from './app/app.routes';
import { provideRouter } from '@angular/router';
import { LoginComponent } from './app/login/login';

bootstrapApplication(App, {
  providers:[provideRouter(routes)]
}).catch(err=>console.error(err));