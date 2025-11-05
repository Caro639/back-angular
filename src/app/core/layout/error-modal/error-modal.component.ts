import { Component } from "@angular/core";
import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { ModalService } from "../../layout/services/modal.service";

@Component({
  selector: "app-error-modal",
  template: `
    <div class="modal-overlay" id="errorModal">
      <div class="modal">
        <div class="modal-header">
          <h2 class="modal-title">Error</h2>
        </div>
        <div class="modal-content">
          <p id="errorMessage">
            An error occurred while processing your request. Please try again
            later.
          </p>
        </div>
        <div class="modal-actions">
          <a class="modal-button primary" (click)="onClose()"
            >Return to Properties</a
          >
        </div>
      </div>
    </div>
  `,
  styles: `
    .modal {
      background-color: var(--surface);
      border-radius: 12px;
      padding: 2rem;
      max-width: 500px;
      width: 90%;
    }

    .modal-header {
      margin-bottom: 1.5rem;
    }

    .modal-title {
      color: var(--primary);
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }

    .modal-content {
      color: var(--on-surface);
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }

    .modal-actions {
      display: flex;
      justify-content: flex-end;
      gap: 1rem;
    }

    .modal-button {
      padding: 0.75rem 1.5rem;
      border-radius: 6px;
      font-weight: 600;
      cursor: pointer;
      transition: opacity 0.3s ease;
      border: none;
      text-decoration: none;
    }

    .modal-button.primary {
      background-color: var(--primary);
      color: var(--background);
    }

    .modal-button.secondary {
      background-color: var(--surface-light);
      color: var(--on-surface);
    }

    .modal-button:hover {
      opacity: 0.9;
    }
  `,
})
export class ErrorModalComponent {
  private modalService = inject(ModalService);
  private router = inject(Router);

  onClose() {
    this.modalService.toggleErrorModal();
    this.router.navigate(["/housing"]);
  }
}
