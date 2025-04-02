import { Component, DoCheck, input, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgxEchartsModule } from 'ngx-echarts';

@Component({
  selector: 'app-revenue-graph',
  imports: [
    MatSelectModule,
    MatFormFieldModule,
    NgxEchartsModule,
    MatTooltipModule,
  ],
  templateUrl: './revenue-graph.component.html',
  styleUrl: './revenue-graph.component.scss',
})
export class RevenueGraphComponent implements OnInit, DoCheck {
  title = input.required<string>();
  periods = ['Year', 'Month', 'Week', 'Day', 'Hour', 'Minute'];
  selectedPeriod = this.periods[0];

  options: any;
  ngDoCheck(): void {
    console.log('doCheck');
  }

  getTooltipFormatter() {
    return (params: any) => {
      return '<div style="width:300px; height: 400px">working</div>';
    };
  }

  ngOnInit(): void {
    const xAxisData = [];
    const data1 = [];
    const data2 = [];

    for (let i = 0; i < 5; i++) {
      xAxisData.push('category' + i);
      data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
      data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }

    this.options = {
      tooltip: {
        // formatter: params => {
        //   return '<div style="width:300px; height: 400px">working</div>';
        // },
        formatter: this.getTooltipFormatter(),
        confine: true,
      },
      xAxis: {
        data: xAxisData,
      },
      yAxis: {},
      series: [
        {
          type: 'bar',
          barCategoryGap: '0%',
          data: data1,
        },
        {
          type: 'bar',
          barCategoryGap: '0%',
          data: data2,
        },
      ],
    };
  }
}
