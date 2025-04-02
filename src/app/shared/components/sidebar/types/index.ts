import { Type } from '@angular/core';

export interface SidebarItem {
  icon: string;
  label: string;
  route?: string;
  subItems?: SidebarItem[];
  component?: Type<unknown>;
  title?: string;
}
