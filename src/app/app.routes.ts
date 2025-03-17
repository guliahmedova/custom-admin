import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'sites',
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Register',
  },
];
