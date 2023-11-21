import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {NavigationComponent} from "./navigation/navigation.component";
import {LogoutComponent} from "./logout/logout.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, HeaderComponent, NavigationComponent, LogoutComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
