import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { User } from '../../types/users';

@Component({
  selector: 'app-info-table',
  imports: [MatIconModule],
  templateUrl: './info-table.component.html',
  styleUrl: './info-table.component.scss',
})
export class InfoTableComponent {
  title = input.required<string>();
  headers = ['Port', 'Total Enquires', 'Conversion Ratio', 'Trend'];
  data = input<User[]>();
}
