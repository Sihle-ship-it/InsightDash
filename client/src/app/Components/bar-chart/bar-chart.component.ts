import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  initOpts: any;
  options: EChartsOption = {};
  
  constructor(){}

  ngOnInit(): void {
    this.displayChart()
  }

displayChart(){
  this.initOpts = {
    renderer: 'svg',
    width: 'auto',
    height: 250
  };

  this.options = {
    color: ['#3398DB', '#FF7F7F'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    legend: {
      orient: 'horizontal'
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7'],
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: 'Q1',
        type: 'bar',
        barWidth: '30%',
        data: [10, 52, 200, 334, 30, 330, 220], //This is where I am going to put my data
      },
      {
        name: 'Q2',
        type: 'bar',
        barWidth: '30%',
        data: [289, 67, 33, 242, 121, 308, 200], //This is where I am going to put my data
      },
    ],
  };    
}
}
