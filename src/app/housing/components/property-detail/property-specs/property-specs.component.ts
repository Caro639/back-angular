import { Component, input } from '@angular/core';
import { HousingPropertyWithDetails } from '../../../models/housing-property';

@Component({
  selector: 'app-property-specs',
  imports: [],
  template: `
		<div class="property-specs">
			<div class="spec-item">
				<span class="label">Surface</span>
				<span class="value">{{ property().surface }}m²</span>
			</div>
			<div class="spec-item">
				<span class="label">Bedrooms</span>
				<span class="value">{{ property().bedrooms }}</span>
			</div>
			<div class="spec-item">
				<span class="label">Bathrooms</span>
				<span class="value">{{ property().bathrooms }}</span>
			</div>
			<div class="spec-item">
				<span class="label">Location</span>
				<span class="value">{{ property().city }}</span>
			</div>
		</div>
		<div class="property-description">
			<h2>Description</h2>
			<p>{{ property().description }}</p>
		</div>
  `,
  styleUrls: ['./property-specs.component.scss']
})
export class PropertySpecsComponent {
  property = input.required<HousingPropertyWithDetails>();
}
