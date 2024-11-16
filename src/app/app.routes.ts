import { Routes } from '@angular/router';
import { FitnessPage } from './pages/fitness.component';
import { HomePage } from './pages/home.component';

export const routes: Routes = [
  {
    path: 'fitness',
    component: FitnessPage,
  },
  {
    path: '',
    component: HomePage,
  },
];
