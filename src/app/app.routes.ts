import {Routes} from '@angular/router';
import {DashboardComponent} from "./main/dashboard/dashboard.component";
import {ProjectComponent} from "./main/project/project.component";
import {TaskComponent} from "./main/task/task.component";
import {CalendarComponent} from "./main/calendar/calendar.component";
import {ReportComponent} from "./main/report/report.component";
import {SettingsComponent} from "./main/settings/settings.component";
import { LogoutComponent } from './main/logout/logout.component';

export const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent,
    title: "Dashboard"
  },
  {
    path: "projects",
    component: ProjectComponent,
    title: "Projects"
  },

  {
    path: "tasks",
    component: TaskComponent,
    title: "Tasks"
  },
  {
    path: "calendar",
    component: CalendarComponent,
    title: "Calendar"
  },
  {
    path: "report",
    component: ReportComponent,
    title: "Report"
  },
  {
    path: "settings",
    component: SettingsComponent,
    title: "Settings"
  },
  {
    path: "logout",
    component: LogoutComponent,
    title: "Logged Out"
  }
];
