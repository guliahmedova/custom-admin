import { DOCUMENT } from '@angular/common';
import { Component, inject, input, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import * as echarts from 'echarts';

type EChartsOption = echarts.EChartsOption;

@Component({
  selector: 'app-revenue-graph',
  imports: [MatSelectModule, MatFormFieldModule, MatTooltipModule],
  templateUrl: './revenue-graph.component.html',
  styleUrl: './revenue-graph.component.scss',
})
export class RevenueGraphComponent implements OnInit {
  title = input.required<string>();
  periods = ['Year', 'Month', 'Week', 'Day', 'Hour', 'Minute'];
  selectedPeriod = this.periods[0];

  document: Document = inject(DOCUMENT);
  private myChart: any = null;

  ngOnInit() {
    this.initChart();
  }

  private initChart(): void {
    this.myChart = echarts.init(this.document.getElementById('graph'));

    const option: EChartsOption = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)',
          },
        },
      ],
    };

    this.myChart.setOption(option);
  }
}
