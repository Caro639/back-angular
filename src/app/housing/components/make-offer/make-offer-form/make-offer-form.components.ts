import { Component, output } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";

export type OfferFormValue = {
  name: string;
  email: string;
  phone: string;
  offer: number;
  message: string;
};

@Component({
  selector: "app-make-offer-form",
  imports: [ReactiveFormsModule],
  template: `
    <form class="offer-form" [formGroup]="offerForm">
      <div class="form-group">
        <label for="name">Full Name</label>
        <input type="text" id="name" formControlName="name" />
      </div>

      <div class="form-group">
        <label for="email">Email Address</label>
        <input type="email" id="email" formControlName="email" />
      </div>

      <div class="form-group">
        <label for="phone">Phone Number</label>
        <input type="tel" id="phone" formControlName="phone" />
      </div>

      <div class="form-group">
        <label for="offer">Your Offer (€)</label>
        <input
          type="number"
          id="offer"
          formControlName="offer"
          min="0"
          step="1000"
        />
      </div>

      <div class="form-group">
        <label for="message">Message (Optional)</label>
        <textarea id="message" formControlName="message" rows="4"></textarea>
      </div>

      <button type="submit" class="submit-button" (click)="onSubmitForm()">
        Submit Offer
      </button>
    </form>
  `,
  styleUrls: ["../make-offer.component.scss"],
})
export class MakeOfferFormComponent {
  offerForm = new FormGroup({
    name: new FormControl("", { nonNullable: true }),
    email: new FormControl("", { nonNullable: true }),
    phone: new FormControl("", { nonNullable: true }),
    offer: new FormControl(0, { nonNullable: true }),
    message: new FormControl("", { nonNullable: true }),
  });
  formSubmitted = output<OfferFormValue>();

  onSubmitForm() {
    this.formSubmitted.emit(this.offerForm.value as OfferFormValue);
  }
}
