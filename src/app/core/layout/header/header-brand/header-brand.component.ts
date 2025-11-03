import { Component } from '@angular/core';

@Component({
  selector: 'app-header-brand',
  imports: [],
  template: `
		<a href="/housing" class="header-brand">
			<svg class="header-logo" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M16 2L2 10L16 18L30 10L16 2Z" fill="#BB86FC"/>
				<path d="M16 20L2 12V26L16 30L30 26V12L16 20Z" fill="#03DAC6"/>
			</svg>
			<div class="header-title">
				<h1>Dwelio</h1>
				<span class="tagline">Your Home, Simplified</span>
			</div>
		</a>
  `,
  styles: `
    .header-brand {
      display: flex;
      align-items: center;
      gap: 1rem;
      text-decoration: none;
    }

    .header-logo {
      width: 32px;
      height: 32px;
    }

    .header-title {
      display: flex;
      flex-direction: column;
    }

    h1 {
      font-size: 1.5rem;
      color: var(--primary);
      line-height: 1.2;
    }

    .tagline {
      font-size: 0.875rem;
      color: var(--on-surface);
      font-weight: 400;
    }
  `
})
export class HeaderBrandComponent {

}
