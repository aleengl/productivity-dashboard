import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { UserStatusComponent } from '../../app/main/dashboard/user-status/user-status.component';
import { ActivityMonitorComponent } from '../../dashboard/activity-monitor/activity-monitor.component';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    UserStatusComponent,
    ActivityMonitorComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
