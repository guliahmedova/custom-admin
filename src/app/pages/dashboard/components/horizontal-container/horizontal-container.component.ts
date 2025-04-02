import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { sales } from '../../consts/sales';

@Component({
  selector: 'app-horizontal-container',
  imports: [MatIconModule],
  templateUrl: './horizontal-container.component.html',
  styleUrl: './horizontal-container.component.scss',
})
export class HorizontalContainerComponent {
  salesList = sales;
  title = input.required<string>()
}
