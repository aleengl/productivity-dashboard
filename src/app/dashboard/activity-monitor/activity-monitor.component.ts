import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';
import { ChartService } from '../../services/chart.service';
import { PlotConfig } from '../../github-user-profile';
import { HttpHeaderResponse } from '@angular/common/http';
import { Person } from '../../github-user-profile';

@Component({
  selector: 'app-activity-monitor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './activity-monitor.component.html',
  styleUrl: './activity-monitor.component.scss',
})
export class ActivityMonitorComponent {
  chartService = inject(ChartService);
  personErrorMessage = '';
  moneyErrorMessage = '';
  title = 'ng-chart';
  person: any = [];
  money: any = [];
  newChart: any = [];

  plotOptions = [
    {
      field: this.person,
      url: './assets/data/person.json',
      label: 'Random Number',
      selector: 'canvas',
    },
    {
      field: this.money,
      url: './assets/data/money.json',
      label: 'Random Money',
      selector: 'canvas1',
    },
  ];

  constructor() {}

  modifyChart(plotObj: PlotConfig) {
    // response: any[], label: string, selector: string, field: any
    // field is this.person or this.money => referencing the field where the instantiated object is saved
    plotObj.field = new Chart(plotObj.selector, {
      type: 'bar',
      data: {
        labels: plotObj.response.map((person) => person.firstname),
        datasets: [
          {
            label: plotObj.label,
            borderColor: '#3e95cd',
            backgroundColor: 'rgba(93, 175, 89, 0.1)',
            data: plotObj.response.map((data) =>
              data.randomNumber
                ? data.randomNumber
                : data.cash
                ? Number(data.cash.substring(1).replace(',', '.'))
                : 0
            ),
            borderWidth: 3,
          },
        ],
      },
      options: {
        onClick: (e) => {
          const canvasPosition = getRelativePosition(e, this.person);
          console.log(canvasPosition);
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  // ngOnInit is a lifecycle hook
  // => triggered when the component is first created
  // => place to perform initialization tasks (e.g. initialize some state in the component)

  // potential implementation when fetching data from an API and render the data into the chart
  ngOnInit() {
    this.plotOptions.forEach((plotOption) => {
      this.chartService.fetchData(plotOption.url).subscribe({
        next: (response) => {
          console.log(response);

          this.modifyChart({
            response,
            label: plotOption.label,
            selector: plotOption.selector,
            field: plotOption.field,
          });
        },
        error: (error: string) => {
          if (plotOption.field === this.person) {
            this.personErrorMessage = error + 'person';
          } else {
            this.moneyErrorMessage = error + 'money';
          }
        },
      });
    });
  }
}
