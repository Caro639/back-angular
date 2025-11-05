import { Component, input, output } from "@angular/core";

@Component({
  selector: "app-favourite-button",
  imports: [],
  template: `
    <button
      class="favorite-button"
      [class.active]="favourite()"
      aria-label="Add to favorites"
      (click)="onAddToFavourites($event)"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
          stroke-width="2"
        />
      </svg>
    </button>
  `,
  styles: `
    .favorite-button {
      background: none;
      border: none;
      padding: 0;
      cursor: pointer;
      color: #FFD700;
      transition: all 0.3s ease;
      z-index: 2;
    }

    .favorite-button svg {
      width: 17px;
      height: 17px;
    }

    .favorite-button:hover {
      transform: scale(1.1);
    }

    .favorite-button.active svg {
      fill: #FFD700;
    }
  `,
})
export class FavouriteButtonComponent {
  favourite = input.required<boolean>();
  toggled = output<void>();
  onAddToFavourites(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    this.toggled.emit();
  }
}
