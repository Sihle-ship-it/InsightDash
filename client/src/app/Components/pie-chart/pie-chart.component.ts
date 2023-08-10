import { Component, OnInit } from '@angular/core';


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
      color: ['#e9e85c', '#3398DB', '#FF7F7F'],
      animation: true,
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
          name: 'Orders',
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
              name: 'XYZ Logistics',
            },
            {
              value: 234,
              name: 'Main st Bakery'
            },
            {
              value: 1548,
              name: 'Acme Hosting',
            },
          ],
        },
      ],
    };
  }
}
