import { DashboardComponent } from '@app/pages/dashboard/dashboard.component';
import { SidebarItem } from '../types';
import { AnalyticsComponent } from '@app/pages/analytics/analytics.component';
import { QuotationsComponent } from '@app/pages/sales/quotations/quotations.component';
import { SettingsComponent } from '@app/pages/settings/settings.component';

export const sidebarLinks: SidebarItem[] = [
  {
    icon: 'cell_tower',
    label: 'Control Tower',
    route: '',
    subItems: [
      {
        icon: 'grid_view',
        label: 'Dashboard',
        route: 'dashboard',
        component: DashboardComponent,
        title: 'Dashboard Page',
      },
      {
        icon: 'assessment',
        label: 'Analytics',
        route: 'analytics',
        component: AnalyticsComponent,
        title: 'Analytics Page',
      },
    ],
  },
  {
    icon: 'real_estate_agent',
    label: 'Sales',
    route: '',
    subItems: [
      {
        icon: 'quiz',
        label: 'Queries',
        route: 'queries',
        title: 'Queries Page',
        component: AnalyticsComponent,
      },
      {
        icon: 'format_quote',
        label: 'Quotations',
        route: 'quotations',
        title: 'Quotations Page',
        component: QuotationsComponent,
      },
    ],
  },
  {
    icon: 'list_alt',
    label: 'Procurement',
    route: '',
    subItems: [
      {
        icon: 'quiz',
        label: 'Freight Forwarding',
        route: 'Freight',
        title: 'Freight Forwarding Page',
        component: QuotationsComponent,
      },
      {
        icon: 'panorama_fish_eye',
        label: 'Express',
        route: 'express',
        title: 'Express Page',
        component: QuotationsComponent,
      },
    ],
  },
  {
    icon: 'price_check',
    label: 'Rate Management',
    route: 'rate-management',
    component: QuotationsComponent,
  },
  {
    icon: 'groups',
    label: 'Customers',
    route: 'customers',
    component: QuotationsComponent,
  },
  {
    icon: 'settings',
    label: 'Settings',
    route: 'settings',
    component: SettingsComponent,
  },
];
