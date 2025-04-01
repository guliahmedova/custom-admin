import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { sidebarLinks } from './consts/links';

@Component({
  selector: 'app-sidebar',
  imports: [MatSidenavModule, MatIconModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  sidebarLinks = sidebarLinks;
}
