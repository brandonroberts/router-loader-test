import 'core-js/es7/reflect';
import 'zone.js';
declare var System: any;
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
