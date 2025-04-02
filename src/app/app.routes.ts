import { Route, Routes } from '@angular/router';
import { LoginComponent } from '@app/pages/auth/login/login.component';
import { RegisterComponent } from '@app/pages/auth/register/register.component';
import { DashboardLayoutComponent } from '@app/shared/components/dashboard-layout/dashboard-layout.component';
import { sidebarLinks } from './shared/components/sidebar/consts/links';
import { SidebarItem } from './shared/components/sidebar/types';

const itemToRoute = (r: SidebarItem) => {
  const route: Route = {
    path: r.route,
    component: r.component,
    title: r.title,
  };

  if (r.subItems) {
    route.children = r.subItems.map((s) => itemToRoute(s));
  }

  return route;
};

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Register Page',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login Page',
  },
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [...sidebarLinks.map((r) => itemToRoute(r))],
  },
];
