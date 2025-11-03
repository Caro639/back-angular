import { Component, computed, inject, input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-button',
  imports: [],
  template: `
		<a (click)="onGoBack()" class="back-button" aria-label="Back to properties">
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z" fill="currentColor"/>
			</svg>
		</a>
  `,
  styleUrls: ['./back-button.component.scss']
})
export class BackButtonComponent {

  private router = inject(Router);
  backDestination = input.required<string>();
  private backRoute = computed(() => this.backDestination().split('/'))

  onGoBack() {
    this.router.navigate(this.backRoute());
  }
}
