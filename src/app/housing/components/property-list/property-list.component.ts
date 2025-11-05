import { Component, inject } from "@angular/core";
import { PropertyListCardComponent } from "./property-list-card/property-list-card.component";
// import { DUMMY_PROPERTIES } from "../../test-data/DUMMY_PROPERTIES";
import { HousingService } from "../../services/housing.service";
// import { Observable } from "rxjs";
import { AsyncPipe } from "@angular/common";
import { Router } from "@angular/router";
import { startWith, Subject, switchMap, tap } from "rxjs";
// import { HousingPropertyPreview } from "../../models/housing-property";

@Component({
  selector: "app-property-list",
  imports: [PropertyListCardComponent, AsyncPipe],
  template: `
    @let properties = properties$ | async;
    <main class="property-list">
      <div class="property-grid">
        @for (property of properties; track property.id) {
        <app-property-list-card
          [property]="property"
          (cardClicked)="onCardClicked($event)"
          (favouriteToggled)="onFavouriteToggled($event)"
        />
        }
      </div>
    </main>
  `,
  styles: `
    .property-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 2rem;
    }
  `,
})
export class PropertyListComponent {
  private housingService: HousingService = inject(HousingService);
  private router = inject(Router);
  private refresh$ = new Subject<number>();
  properties$ = this.refresh$.pipe(
    startWith(Date.now()),
    switchMap(() => this.housingService.getAllProperties())
  );

  onCardClicked(property: { id: string }) {
    this.router.navigate(["/housing", property.id]);
  }

  onFavouriteToggled(property: { id: string }) {
    this.housingService
      .toggleFavourite(property.id)
      .pipe(tap(() => this.refreshProperties()))
      .subscribe();
  }

  private refreshProperties() {
    this.refresh$.next(Date.now());
  }
}
