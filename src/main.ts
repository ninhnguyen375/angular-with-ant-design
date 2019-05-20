import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// ! fix that sh** before 12-05-2019!
if (environment.production) {
  enableProdMode();
}

//  ? Why are you do that sh**?
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));

// TODO : write a resignation application.
