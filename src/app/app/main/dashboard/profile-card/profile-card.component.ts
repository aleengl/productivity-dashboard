import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { GithubUserProfile } from '../../../../github-user-profile';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss',
})
export class ProfileCardComponent {
  readonly url = 'https://api.github.com/users/';
  userProfile: GithubUserProfile | undefined;

  constructor() {
    this.getUser('aleengl').then((userData) => {
      this.userProfile = userData;
    });
  }

  async getUser(user: string): Promise<GithubUserProfile> {
    const response = await fetch(`${this.url}${user}`);
    const data: GithubUserProfile = await response.json();

    return data;
  }
}
