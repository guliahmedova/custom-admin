import { Type } from '@angular/core';

export interface SidebarItem {
  id: string;
  icon: string;
  label: string;
  children?: SidebarItem[];
  route?: string;
}
