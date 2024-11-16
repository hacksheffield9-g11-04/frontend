import { Routes } from '@angular/router';
import { FitnessPage } from './pages/fitness.component';
import { HomePage } from './pages/home.component';
import { KnowledgePage } from './pages/knowledge.component';
import { MindPage } from './pages/mind.component';
import { ActivityListPage } from './pages/activity-list.component';

export const routes: Routes = [
  {
    path: 'fitness',
    component: FitnessPage,
  },
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'knowledge',
    component: KnowledgePage
  },
  {
    path: 'mind',
    component: MindPage
  },
  {
    path: 'activities-today',
    component: ActivityListPage
  }
];
