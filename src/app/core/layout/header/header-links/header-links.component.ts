import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header-links',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  template: `
		<nav>
			<a routerLink="/housing" routerLinkActive="active">Properties</a>
			<a routerLink="/housing">About</a>
			<a routerLink="/housing">Contact</a>
		</nav>
  `,
  styles: `
    nav {
      display: flex;
      gap: 2rem;
    }

    a {
      color: var(--on-surface);
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease;
    }

    a:hover,
    a.active {
      color: var(--primary);
    }
  `
})
export class HeaderLinksComponent {

}
