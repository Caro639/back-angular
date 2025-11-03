import { Component } from '@angular/core';

@Component({
  selector: 'app-offer-submitted-modal',
  imports: [],
  template: `
		<div class="modal-overlay" id="successModal">
			<div class="modal success-modal">
				<div class="modal-content">
					<div class="success-icon">✓</div>
					<h2>Offer Submitted!</h2>
					<p>We'll review your offer and get back to you soon.</p>
				</div>
			</div>
		</div>
  `,
  styles: `
    .success-modal {
      text-align: center;
      padding: 2rem;
    }

    .success-icon {
      width: 60px;
      height: 60px;
      background-color: var(--secondary);
      color: var(--background);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      margin: 0 auto 1rem;
    }

    .success-modal h2 {
      color: var(--primary);
      margin-bottom: 0.5rem;
    }

    .success-modal p {
      color: var(--on-surface);
    }
  `
})
export class OfferSubmittedModalComponent {

}
