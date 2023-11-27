import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import {DateComponent} from './date/date.component';
import {SearchComponent} from './search/search.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, WelcomeComponent, DateComponent, SearchComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
