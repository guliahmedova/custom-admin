import { SidebarLink } from '../types';

export const sidebarLinks: SidebarLink[] = [
  {
    id: 'Control Tower',
    icon: 'cell_tower',
    label: 'Control Tower',
    children: [
      {
        id: 'Dashboard',
        icon: 'grid_view',
        label: 'Dashboard',
      },
      {
        id: 'Analytics',
        icon: 'assessment',
        label: 'Analytics',
      },
    ],
  },
  {
    id: 'Sales',
    icon: 'real_estate_agent',
    label: 'Sales',
    children: [
      {
        id: 'Queries',
        icon: 'quiz',
        label: 'Queries',
      },
      {
        id: 'Quotations',
        icon: 'format_quote',
        label: 'Quotations',
      },
    ],
  },
  {
    id: 'Procurement',
    icon: 'list_alt',
    label: 'Procurement',
    children: [
      {
        id: 'Freight Forwarding',
        icon: 'quiz',
        label: 'Freight Forwarding',
      },
      {
        id: 'Express',
        icon: 'panorama_fish_eye',
        label: 'Express',
      },
    ],
  },
];
