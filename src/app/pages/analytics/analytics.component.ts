import { Component, inject } from '@angular/core';
import { InfoTableComponent } from './components/info-table/info-table.component';
import { RevenueGraphComponent } from './components/revenue-graph/revenue-graph.component';
import { AnalyticsService } from './services/analytics.service';

@Component({
  selector: 'app-analytics',
  imports: [RevenueGraphComponent, InfoTableComponent],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.scss',
})
export class AnalyticsComponent {
  private analyticService = inject(AnalyticsService);
  public users = this.analyticService.users;
}
