import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
// PRIMER ARCHIVO QUE SE CARGA DE LA APLICACIÓN
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
