import { Component, inject } from '@angular/core';
import { ModalService } from '../../../core/layout/services/modal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offer-limit-reached-modal',
  imports: [],
  template: `
		<div class="modal-overlay" id="alreadyOfferedModal">
			<div class="modal">
				<div class="modal-header">
					<h2 class="modal-title">Offer Limit Reached</h2>
				</div>
				<div class="modal-content">
					<p>Too many offers are currently active on this property. Would you like to view other available properties?</p>
				</div>
				<div class="modal-actions">
					<button class="modal-button secondary" (click)="onClose()">Close</button>
					<a (click)="onViewSimilarProperties()" class="modal-button primary">View Other Properties</a>
				</div>
			</div>
		</div>
  `,
  styles: ``
})
export class OfferLimitReachedModalComponent {
  private modalService = inject(ModalService);
  private router = inject(Router);

  onClose() {
    this.modalService.toggleOfferLimitReachedModal();
  }

  onViewSimilarProperties() {
    this.modalService.toggleOfferLimitReachedModal();
    this.router.navigate(['/housing']);
  }
}
