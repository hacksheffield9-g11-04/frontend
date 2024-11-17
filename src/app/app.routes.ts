import { Routes } from '@angular/router';
import { FitnessPage } from './pages/fitness.component';
import { HomePage } from './pages/home.component';
import { KnowledgePage } from './pages/knowledge.component';
import { MindPage } from './pages/mind.component';
import { ActivityListPage } from './pages/activity-list.component';
import { GridPage } from './pages/grid.component';
import { CardsPage } from './pages/cards.component';

export const routes: Routes = [
  {
    path: 'fitness',
    component: FitnessPage,
  },
  {
    path: 'knowledge',
    component: KnowledgePage,
  },
  {
    path: 'mind',
    component: MindPage,
  },
  {
    path: 'grid',
    component: GridPage,
  },
  {
    path: 'activities-today',
    component: ActivityListPage,
  },
  {
    path: 'cards',
    component: CardsPage,
  },
  {
    path: 'list',
    component: ActivityListPage,
  },

  { path: '', component: HomePage },

  { path: '**', component: HomePage },
];
