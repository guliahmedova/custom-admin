import { Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg',
  template: `
    <svg>
      <use [attr.xlink:href]="link" [attr.href]="link" />
    </svg>
  `,
  styles: `
      svg {
        width: inherit;
        height: inherit;
        border-radius: inherit;
        display: inline-block;
      }

      :host{
        display: inline-block;
      }
    `,
})
export class SvgComponent implements OnInit {
  link: string = '';
  type = input<string>('');
  ngOnInit(): void {
    this.link = `/icons/${this.type()}.svg#${this.type()}`;
  }
}
