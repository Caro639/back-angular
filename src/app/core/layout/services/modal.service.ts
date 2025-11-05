import { inject, Injectable, signal } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class ModalService {
  private router = inject(Router);

  private showSoldModal = signal<boolean>(false);
  private showOfferSubmittedModal = signal<boolean>(false);
  private showOfferLimitReachedModal = signal<boolean>(false);
  private showErrorModal = signal<boolean>(false);

  soldModalVisible = this.showSoldModal.asReadonly();
  offerSubmittedModalVisible = this.showOfferSubmittedModal.asReadonly();
  offerLimitReachedModalVisible = this.showOfferLimitReachedModal.asReadonly();
  errorModalVisible = this.showErrorModal.asReadonly();

  toggleSoldModal(): void {
    this.showSoldModal.update((value) => !value);
  }

  toggleOfferLimitReachedModal(): void {
    this.showOfferLimitReachedModal.update((value) => !value);
  }

  toggleOfferSubmittedModal(): void {
    this.showOfferSubmittedModal.update((value) => !value);
  }

  toggleErrorModal(): void {
    this.showErrorModal.update((value) => !value);
  }

  showOfferSubmittedModalThenNavigate(): void {
    this.showOfferSubmittedModal.set(true);
    setTimeout(() => {
      this.showOfferSubmittedModal.set(false);
      this.router.navigate(["/housing"]);
    }, 2000);
  }
}
