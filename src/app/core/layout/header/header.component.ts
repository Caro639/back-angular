import { Component } from '@angular/core';
import { HeaderLinksComponent } from './header-links/header-links.component';
import { HeaderBrandComponent } from './header-brand/header-brand.component';

@Component({
  selector: 'app-header',
  imports: [
    HeaderLinksComponent,
    HeaderBrandComponent
  ],
  template: `
		<header class="header">
			<div class="header-content">
				<app-header-brand/>
				<app-header-links/>
			</div>
		</header>
  `,
  styles: `
    .header {
      background-color: var(--surface);
      padding: 1.5rem 0;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }

    .header-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  `
})
export class HeaderComponent {

}
