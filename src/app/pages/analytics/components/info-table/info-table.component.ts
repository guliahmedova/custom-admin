import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TableData } from '@app/pages/analytics/types';

@Component({
  selector: 'app-info-table',
  imports: [MatIconModule],
  templateUrl: './info-table.component.html',
  styleUrl: './info-table.component.scss',
})
export class InfoTableComponent {
  title = input.required<string>();
  headers = ['Port', 'Total Enquires', 'Conversion Ratio', 'Trend'];
  data = input<TableData[]>();
}
