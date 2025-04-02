import { Component, input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { mapCards } from '@app/pages/dashboard/consts/map-cards';
import { SvgComponent } from '@app/shared/components/svg/svg.component';

@Component({
  selector: 'app-tracking',
  imports: [SvgComponent, MatIconModule, MatSelectModule, MatFormFieldModule],
  templateUrl: './tracking.component.html',
  styleUrl: './tracking.component.scss',
})
export class TrackingComponent {
  title = input.required<string>();
  cards = mapCards;
  statuses = ['Delivered', 'Stuck', 'In Transit'];
  selectedStatus = this.statuses[0];
}
