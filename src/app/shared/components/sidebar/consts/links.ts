import { SidebarItem } from '../types';

export const sidebarLinks: SidebarItem[] = [
  {
    id: 'Control Tower',
    icon: 'cell_tower',
    label: 'Control Tower',
    route: 'dashboard',
    children: [
      {
        id: 'Dashboard',
        icon: 'grid_view',
        label: 'Dashboard',
        route: 'view',
      },
      {
        id: 'Analytics',
        icon: 'assessment',
        label: 'Analytics',
        route: 'analytics',
      },
    ],
  },
  {
    id: 'Sales',
    icon: 'real_estate_agent',
    label: 'Sales',
    route: 'sales',
    children: [
      {
        id: 'Queries',
        icon: 'quiz',
        label: 'Queries',
        route: 'queries',
      },
      {
        id: 'Quotations',
        icon: 'format_quote',
        label: 'Quotations',
        route: 'quotations',
      },
    ],
  },
  {
    id: 'Procurement',
    icon: 'list_alt',
    label: 'Procurement',
    route: 'procurement',
    children: [
      {
        id: 'Freight Forwarding',
        icon: 'quiz',
        label: 'Freight Forwarding',
        route: 'Freight',
      },
      {
        id: 'Express',
        icon: 'panorama_fish_eye',
        label: 'Express',
        route: 'express',
      },
    ],
  },
];
