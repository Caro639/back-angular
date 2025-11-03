import { Component, input } from '@angular/core';

@Component({
  selector: 'app-property-features',
  imports: [],
  template: `
		<div class="property-features">
			<h2>Features</h2>
			<ul>
				@for (feature of features(); track feature) {
					<li>{{ feature }}</li>
				}
			</ul>
		</div>
  `,
  styleUrls: ['./property-features.component.scss']
})
export class PropertyFeaturesComponent {
  features = input<string[]>([]);
}
