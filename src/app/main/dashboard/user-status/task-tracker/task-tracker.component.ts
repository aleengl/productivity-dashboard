import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-tracker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-tracker.component.html',
  styleUrl: './task-tracker.component.scss',
})
export class TaskTrackerComponent {
  firstPart = '';
  secondPart = '';
  _numberOfTasks = '';

  // instead of using the @Input decorator directly on the property and bind it
  // => use @Input decorator on setter and getter methods
  // => setter method => can convert or change the incoming data
  // => set the property inside the setter method
  // => getter method => just return the property and use it in the template as normal property
  @Input()
  set title(title: string) {
    const whiteSpaceIndex = title.indexOf(' ');
    this.firstPart = title.substring(0, whiteSpaceIndex);
    this.secondPart = title.substring(whiteSpaceIndex);
  }

  @Input()
  get numberOfTasks(): string {
    return this._numberOfTasks;
  }
  set numberOfTasks(numberOfTasks: string) {
    const stringToNum = Number(numberOfTasks);

    if (stringToNum < 10) {
      this._numberOfTasks = '0' + stringToNum;
    } else {
      this._numberOfTasks = numberOfTasks;
    }
  }
}
