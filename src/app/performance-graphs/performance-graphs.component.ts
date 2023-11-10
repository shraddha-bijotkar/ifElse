import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-performance-graphs',
  templateUrl: './performance-graphs.component.html',
  styleUrls: ['./performance-graphs.component.scss']
})
export class PerformanceGraphsComponent implements OnInit {
  public chart: any;
  labelsDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat'];
  labelsYears = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  labelDoughnut = ['Men', 'Electronics', 'Women'];

  ngOnInit() {
    this.createChart();
  }

  createChart(){
  
    this.chart = new Chart("BarChart", {
      type: 'bar', //this denotes tha type of chart
  
      data: {// values on X-Axis
        
        labels: this.labelsYears, 
	       datasets: [
          {
            label: "Income",
            data: ['65','59', '80', '81', '56', '55', '40', '80', '81', '56', '55', '40'],
            borderColor: 'blue',
            backgroundColor: 'blue',
            barPercentage: 0.2,
            barThickness:5,
          },
          {
            label: "Borrow",
            data: ['65','59', '80', '81', '56', '55', '40', '80', '81', '56', '55', '40'],
            borderColor: 'grey',
            backgroundColor: 'grey',
            barPercentage: 0.2,
            barThickness:5,
          }  
          
        ],
         
      },
      options: {
        responsive: true,
        scales: {
          x: {
            stacked: true,
            ticks: {
              stepSize: 10,
          }
          },
          y: {
            stacked: true,
            ticks: {
              stepSize: 50,
          }
          }
        }
      }
      
    });

    this.chart = new Chart("LineChart", {
      type: 'line', //this denotes tha type of chart
  
      data: {// values on X-Axis
        
        labels: this.labelsDays, 
	       datasets: [
          {
            label: "All Days",
            data: ['65','59', '80', '81', '56', '55', '40'],
            borderColor: 'blue',
            backgroundColor: 'blue',
            tension: 0.4,
          }  
          
        ],
         
      },
      options: {
        responsive: true,
        aspectRatio: 2,
        scales: {
          x: {
            stacked: true,
            ticks: {
              stepSize: 10,
          }
          },
          y: {
            stacked: true,
            ticks: {
              stepSize: 50,
          }
          }
        }
      }
      
    });

    this.chart = new Chart("DoughnutChart", {
      type: 'doughnut', //this denotes tha type of chart
  
      data: {// values on X-Axis
        
        labels: this.labelDoughnut, 
	       datasets: [
          {
            label: "All Days",
            data: ['65','59', '55'],
            backgroundColor: ['blue', 'lightblue', 'grey'],
            
          }  
          
        ],
         
      },
      options: {
        cutout: 100,
        plugins: {
          legend: {
            position: 'bottom',
          }
        },
        responsive: true,
      }
      
    });
  }


}
