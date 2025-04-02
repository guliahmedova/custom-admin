import { Component, computed, Input, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidebarItemComponent } from "./components/sidebar-item/sidebar-item.component";
import { sidebarLinks } from './consts/links';
import { SidebarItem } from './types';

@Component({
  selector: 'app-sidebar',
  imports: [MatSidenavModule, MatIconModule, SidebarItemComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  menuItems: SidebarItem[] = sidebarLinks;
  sideNavCollapsed = signal(false);
  @Input() set collapsed(val: boolean) {
    this.sideNavCollapsed.set(val);
  }
  sidenavWidth = computed(() => (this.sideNavCollapsed() ? '68px' : '250px'));
}
