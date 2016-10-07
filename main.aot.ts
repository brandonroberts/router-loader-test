import 'core-js/es7/reflect';
declare var System: any;
import {platformBrowser} from '@angular/platform-browser';
import {AppModuleNgFactory} from './src/compiled/src/app.module.ngfactory';

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
