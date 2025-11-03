import { Component, input } from "@angular/core";
import { HousingPropertyPreview } from "../../../../models/housing-property";

@Component({
  selector: "app-property-list-card-thumbnail",
  imports: [],
  template: `
    <div class="property-image">
      <img
        [src]="property().thumbnailUrl"
        [alt]="property().title"
      />
    </div>
  `,
  styles: `
    .property-image {
      margin: -1.5rem -1.5rem 1.5rem -1.5rem;
      border-radius: 12px 12px 0 0;
      overflow: hidden;
    }

    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      display: block;
    }`,
})
export class PropertyListCardThumbnailComponent {
  property =
    input.required<HousingPropertyPreview>();
}
