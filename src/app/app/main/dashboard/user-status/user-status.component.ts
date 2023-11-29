import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { TaskTrackerComponent } from '../../../../main/dashboard/user-status/task-tracker/task-tracker.component';

@Component({
  selector: 'app-user-status',
  standalone: true,
  imports: [CommonModule, ProfileCardComponent, TaskTrackerComponent],
  templateUrl: './user-status.component.html',
  styleUrl: './user-status.component.scss',
})
export class UserStatusComponent {}
