import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
})
export class PieChartComponent implements OnInit {
  usersChartOptions = {};

  constructor() {}

  ngOnInit(): void {
    this.displayChart();
  }

  displayChart() {
    this.usersChartOptions = {
      tooltip: {
        trigger: 'item',
        confine: true
      },
      legend: {
        top: '15%',
        left: 'center',
      },
      series: [
        {
          name: 'User Typle',
          type: 'pie',
          radius: ['40%', '60%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center',
          },
          labelLine: {
            show: false,
          },
          data: [
            {
              value: 335,
              name: 'Direct Visit',
            },
            {
              value: 234,
              name: 'Union Ad',
            },
            {
              value: 1548,
              name: 'Search Engine',
            },
          ],
        },
      ],
    };
  }
}
