import {Component} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
}
