import { Component } from '@angular/core';
import { HorizontalContainerComponent } from "./components/horizontal-container/horizontal-container.component";
import { VerticalContainerComponent } from "./components/vertical-container/vertical-container.component";
import { TrackingComponent } from "./components/tracking/tracking.component";

@Component({
  selector: 'app-dashboard',
  imports: [HorizontalContainerComponent, VerticalContainerComponent, TrackingComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
