
// import { provideRouter } from '@angular/router';
// import { routes } from './app.routes';

// export const appConfig = {
//   providers: [
//     provideRouter(routes)
//   ]
// };


//src/app/app.config.ts
import { ApplicationConfig } from '@angular/core';

import { provideRouter } from '@angular/router';

    

import { routes } from './app.routes';

import { provideAnimations } from '@angular/platform-browser/animations';

    

import { provideHttpClient } from '@angular/common/http';

     

export const appConfig: ApplicationConfig = {

  providers: [provideRouter(routes), provideAnimations(), provideHttpClient()]

};

