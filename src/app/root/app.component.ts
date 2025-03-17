import { Component, ElementRef, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `<router-outlet />`,
})
export class AppComponent implements OnInit {
  constructor(private _elementRef: ElementRef) {}

  ngOnInit(): void {
    this._elementRef.nativeElement.removeAttribute('ng-version');
  }
}
