import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit{
  options: EChartsOption = {};

  constructor(){}
  ngOnInit(): void {
      this.displayChart()
  }

  displayChart(){
    this.options = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        data: ['Forecasting', 'Sentiment Analysis', 'Image Recognition'],
        top: 5,   // or 'top', 'middle', etc.
        left: 'center',
        icon: 'roundRect'
      },
      grid: {
        left: '5%',
        right: '5%',
        bottom: '15%',
        top: '15%',
        containLabel: true
    },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Forecasting',
          data: [52, 34, 49, 53, 68, 62, 69],
          areaStyle: { color: 'rgba(40,40,227,0.2)'},
          lineStyle: {
            color: '#2828e3' //blue
          },
          smooth: true,
          type: 'line'
        },
        {
          name: 'Sentiment Analysis',
          data: [32, 14, 46, 23, 38, 56, 63],
          areaStyle: {
            color: 'rgba(144, 238, 144, 0.2)'  // Light Green with 20% opacity
          },
          lineStyle: {
            color: 'lightgreen'
          },
          smooth: true,
          type: 'line'
        },
        {
          name: 'Image Recognition',
          data: [13, 18, 26, 13, 28, 26, 27],
          areaStyle: {color: 'rgba(255, 255, 0, 0.2)'},
          lineStyle: {
            color: 'yellow'
          },
          smooth: true,
          type: 'line'
        },
        
      ]
    };
    
          
  }
}
