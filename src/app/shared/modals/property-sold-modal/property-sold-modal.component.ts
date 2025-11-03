import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from '../../../core/layout/services/modal.service';

@Component({
  selector: 'app-property-sold-modal',
  template: `
		<div class="modal-overlay" id="soldModal">
			<div class="modal">
				<div class="modal-header">
					<h2 class="modal-title">Property Sold</h2>
				</div>
				<div class="modal-content">
					<p>We apologize, but this property has already been sold. Would you like to view similar properties in this area?</p>
				</div>
				<div class="modal-actions">
					<button class="modal-button secondary" (click)="onClose()">Close</button>
					<a class="modal-button primary" (click)="onViewSimilarProperties()">View Similar Properties</a>
				</div>
			</div>
		</div>
  `,
  styles: ``
})
export class PropertySoldModalComponent {

  private modalService = inject(ModalService);
  private router = inject(Router);

  onClose() {
    this.modalService.toggleSoldModal();
  }

  onViewSimilarProperties() {
    this.modalService.toggleSoldModal();
    this.router.navigate(['/housing']);
  }
}
