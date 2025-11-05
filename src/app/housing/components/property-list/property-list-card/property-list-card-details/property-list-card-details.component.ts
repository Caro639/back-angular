import { Component, input, output } from "@angular/core";
import { CurrencyPipe } from "@angular/common";
import { HousingPropertyPreview } from "../../../../models/housing-property";
import { FavouriteButtonComponent } from "./favourite-button/favourite-button.component";

@Component({
  selector: "app-property-list-card-details",
  imports: [CurrencyPipe, FavouriteButtonComponent],
  template: `
    <div class="title">
      <h2>{{ property().title }}</h2>
      <app-favourite-button
        [favourite]="property().favourite"
        (toggled)="onToggleFavourite()"
      />
    </div>
    <div class="property-details">
      <span class="price">{{
        property().price | currency : "EUR" : "symbol" : "4.0-0"
      }}</span>
      <span class="surface">{{ property().surface }}m²</span>
      <span class="city">{{ property().city }}</span>
    </div>
  `,
  styles: `
    .title {
      display: flex;
      justify-content: space-between;
    }

    app-favourite-button {
      transform: translateY(0.3rem);
    }

    .property-details {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }

    span {
      font-size: 0.9rem;
      color: var(--on-surface);
    }

    .price {
      grid-column: 1 / -1;
      color: var(--secondary);
      font-size: 1.1rem;
      font-weight: 600;
    }

    .surface, .city {
      color: var(--on-surface);
    }

    h2 {
      font-size: 1.25rem;
      margin-bottom: 1rem;
      color: var(--on-background);
    }`,
})
export class PropertyListCardDetailsComponent {
  property = input.required<HousingPropertyPreview>();
  favouriteToggled = output<void>();

  onToggleFavourite() {
    this.favouriteToggled.emit();
  }
}
