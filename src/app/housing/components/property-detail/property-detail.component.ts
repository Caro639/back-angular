import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { PropertyFeaturesComponent } from './property-features/property-features.component';
import { PropertySpecsComponent } from './property-specs/property-specs.component';
import { BackButtonComponent } from '../back-button/back-button.component';
import { DUMMY_PROPERTIES } from '../../test-data/DUMMY_PROPERTIES';

@Component({
  selector: 'app-property-detail',
  imports: [
    CurrencyPipe,
    PropertyFeaturesComponent,
    PropertySpecsComponent,
    BackButtonComponent
  ],
  template: `
		<main class="property-details">
			<div class="property-hero">
				<app-back-button backDestination="/housing"/>
				@if (property.offerMade) {
					<div class="offer-made-banner">Offer Made</div>
				}
				<img [src]="property.thumbnailUrl" [alt]="property.title" class="property-hero-image">
			</div>

			<div class="property-content">
				<div class="property-header">
					<h1>{{ property.title }}</h1>
					<p class="price">{{ property.price | currency: 'EUR' : 'symbol' : '4.0-0' }}</p>
				</div>

				<app-property-specs [property]="property"/>
				<app-property-features [features]="property.features"/>

				<a class="make-offer-button">Make an Offer</a>
			</div>
		</main>
  `,
  styleUrls: ['./property-detail.component.scss'],
})
export class PropertyDetailComponent {
  property = DUMMY_PROPERTIES[0];
}
