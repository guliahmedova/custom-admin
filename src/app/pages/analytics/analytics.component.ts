import { Component } from '@angular/core';
import { InfoTableComponent } from './components/info-table/info-table.component';
import { exportsData } from './consts/export';

@Component({
  selector: 'app-analytics',
  imports: [InfoTableComponent],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.scss',
})
export class AnalyticsComponent {
  data = exportsData;
}
