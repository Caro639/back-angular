import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'housing', loadComponent: () => import('./housing/components/property-list/property-list.component').then(m => m.PropertyListComponent) },
  { path: 'housing/:id', loadComponent: () => import('./housing/components/property-detail/property-detail.component').then(m => m.PropertyDetailComponent) },
  { path: 'housing/:id/make-offer', loadComponent: () => import('./housing/components/make-offer/make-offer.component').then(m => m.MakeOfferComponent) },
  { path: '', redirectTo: 'housing', pathMatch: 'full' }
];
