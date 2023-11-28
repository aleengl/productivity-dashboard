import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-date',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './date.component.html',
  styleUrl: './date.component.scss',
})
export class DateComponent {
  currentDate;

  constructor() {
    this.currentDate = new Date();
  }
}
