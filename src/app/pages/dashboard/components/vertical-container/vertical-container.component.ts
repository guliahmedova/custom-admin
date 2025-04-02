import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { sales } from '@app/pages/dashboard/consts/sales';

@Component({
  selector: 'app-vertical-container',
  imports: [MatIconModule],
  templateUrl: './vertical-container.component.html',
  styleUrl: './vertical-container.component.scss',
})
export class VerticalContainerComponent {
  salesList = sales;
  title = input.required<string>();
}
