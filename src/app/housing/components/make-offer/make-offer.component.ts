import { Component } from "@angular/core";
import { CurrencyPipe } from "@angular/common";
import { FormsModule } from "@angular/forms";
// import { DUMMY_PROPERTIES } from '../../test-data/DUMMY_PROPERTIES';
import { HousingService } from "../../services/housing.service";
import { delay, filter, Observable, switchMap, tap } from "rxjs";
import { HousingPropertyWithDetails } from "../../models/housing-property";
import { Input, OnInit, inject } from "@angular/core";
import { AsyncPipe } from "@angular/common";
import {
  MakeOfferFormComponent,
  OfferFormValue,
} from "./make-offer-form/make-offer-form.components";
import { ModalService } from "../../../core/layout/services/modal.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-make-offer",
  imports: [CurrencyPipe, FormsModule, AsyncPipe, MakeOfferFormComponent],
  template: `
    @if (property$ | async; as property) {
    <main class="make-offer">
      <div class="offer-content">
        <h1>Make an Offer</h1>
        <div class="property-summary">
          <img
            [src]="property.thumbnailUrl"
            [alt]="property.title"
            class="property-image"
          />
          <div class="property-info">
            <h2>{{ property.title }}</h2>
            <p class="price">
              {{ property.price | currency : "EUR" : "symbol" : "4.0-0" }}
            </p>
            <p class="location">
              {{ property.city }}
            </p>
          </div>
        </div>
        <app-make-offer-form (formSubmitted)="onSubmitForm($event)" />

        <!-- <form class="offer-form" #offerForm="ngForm">
          <div class="form-group">
            <label for="name">Full Name</label>
            <input type="text" id="name" name="name" />
          </div>

          <div class="form-group">
            <label for="email">Email Address</label>
            <input type="email" id="email" name="email" />
          </div>

          <div class="form-group">
            <label for="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" />
          </div>

          <div class="form-group">
            <label for="offer">Your Offer (€)</label>
            <input type="number" id="offer" name="offer" min="0" step="1000" />
          </div>

          <div class="form-group">
            <label for="message">Message (Optional)</label>
            <textarea id="message" name="message" rows="4"></textarea>
          </div>
          <button type="submit" class="submit-button">Submit Offer</button>
        </form> -->
      </div>
    </main>
    }
  `,
  styleUrls: ["./make-offer.component.scss"],
})
export class MakeOfferComponent implements OnInit {
  private housingService: HousingService = inject(HousingService);
  private modalService = inject(ModalService);
  private router: Router = inject(Router);
  // property = DUMMY_PROPERTIES[0];
  @Input() id!: string;
  property$!: Observable<HousingPropertyWithDetails>;

  ngOnInit(): void {
    this.property$ = this.housingService.getPropertyById(this.id);
  }

  onSubmitForm(offerFormValue: OfferFormValue): void {
    // console.log("Form Submitted:", offerFormValue.offer);
    this.housingService
      .checkIfOfferLimitReached(this.id)
      .pipe(
        tap((limitReached) => {
          if (limitReached) {
            this.modalService.toggleOfferLimitReachedModal();
          }
        }),
        filter((limitReached) => !limitReached),
        switchMap(() =>
          this.housingService.makeOffer(this.id, offerFormValue.offer)
        ),
        tap(() => this.modalService.toggleOfferSubmittedModal()),
        delay(1500),
        tap(() => this.router.navigate(["/housing"])),
        delay(500),
        tap(() => this.modalService.toggleOfferSubmittedModal())
      )
      .subscribe();
  }
}
