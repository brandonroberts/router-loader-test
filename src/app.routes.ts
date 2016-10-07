import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    loadChildren: './features/lazy/lazy.module#LazyModule',
    path: 'lazy'
  }
];
