import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {


  chart: any;

  chartLoader() {
    console.log('Chart Loader Called');
  
    this.chart = new Chart('Linechart', {
      type: 'line',
      data: {
        labels: ["1/7", "8/7", "15/7", "22/7", "29/7", "5/8", "12/8", "2/9", "9/9", "16/9","23/9","30/9","14/10","21/10"],
        datasets: [
          {
            label: "", // Empty label to remove dataset label from the legend
            data: [28, 50, 15, 95, 40, 45, 65, 35, 82,87,55,30,50], // Example data
            borderColor:'#B164D7',
            borderWidth: 1
          },
        ]
      },
      options: {
        plugins: {
          legend: {
            display: false, // Hide the legend
          },
          title: {
            display: false, // Hide the title if any
          }
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            min: 0,
            max: 100,
            ticks: {
              stepSize: 25,
              callback: function (value: string | number) {
                return typeof value === 'number' ? value + '%' : value;
              }
            }
          }
        },
      }
    });
  }
  

  constructor() { }

  ngOnInit(): void {
    this.chartLoader();
  }

}
