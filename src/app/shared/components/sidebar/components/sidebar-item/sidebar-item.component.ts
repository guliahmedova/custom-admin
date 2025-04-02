import { animate, style, transition, trigger } from '@angular/animations';
import { Component, computed, input, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SidebarItem } from '@app/components/sidebar/types';

@Component({
  selector: 'app-sidebar-item',
  animations: [
    trigger('expandContractMenu', [
      transition(':enter', [
        style({ opacity: 0, height: '0px' }),
        animate('500ms ease-in-out', style({ opacity: 1, height: '*' })),
      ]),
      transition(':leave', [
        animate('500ms ease-in-out', style({ opacity: 0, height: '0px' })),
      ]),
    ]),
  ],
  imports: [MatListModule, RouterLink, RouterLinkActive, MatIconModule],
  templateUrl: './sidebar-item.component.html',
  styleUrl: './sidebar-item.component.scss',
})
export class SidebarItemComponent {
  item = input.required<SidebarItem>();
  collapsed = input(false);
  routeHistory = input('');
  level = computed(() => this.routeHistory().split('/').length - 1);
  indentation = computed(() =>
    this.collapsed() ? '16px' : `${16 + this.level() * 16}px`
  );
  nestedMenuOpen = signal(false);
}
