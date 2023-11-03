import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


declare global {
  interface Window {
    captchaCallback: (captcha: string) => void;
  }
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  