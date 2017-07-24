import {Routes} from '@angular/router';
import { HeroesPageComponent } from './components';

export const routes: Routes = [
  {
    path:       '',
    pathMatch:  'full',
    redirectTo: '/heroes'
  },
  {
    path: 'heroes',
    component: HeroesPageComponent,
  },
  {
    path: 'heroes/:id',
    component: HeroesPageComponent
  },
  {
    path:       '**',
    redirectTo: '/heroes'
  }
];
