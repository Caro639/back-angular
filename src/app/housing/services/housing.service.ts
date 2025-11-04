import {
  inject,
  Injectable,
} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import {
  HousingPropertyPreview,
  HousingPropertyWithDetails,
} from "../models/housing-property";
import { response } from "express";
import { CheckOfferLimitResponse } from "../models/check-offer-limit-type.type";

@Injectable({
  providedIn: "root",
})
export class HousingService {
  private http: HttpClient = inject(HttpClient);

  getAllProperties(): Observable<
    HousingPropertyPreview[]
  > {
    return this.http.get<
      HousingPropertyPreview[]
    >("http://localhost:3030/api/properties/");
  }

  getPropertyById(
    id: string
  ): Observable<HousingPropertyWithDetails> {
    return this.http.get<HousingPropertyWithDetails>(
      `http://localhost:3030/api/properties/${id}`
    );
  }

  checkIfOfferLimitReached(
    id: string
  ): Observable<boolean> {
    return this.http
      .get<{
        checkOfferLimitResponse: CheckOfferLimitResponse;
        // id: string;
        // offerLimitReached: boolean;
      }>(
        `http://localhost:3030/api/properties/${id}/check-offer-limit`
      )
      .pipe(
        map(
          (response: {
            checkOfferLimitResponse: CheckOfferLimitResponse;
          }) =>
            response.checkOfferLimitResponse
              .offerLimitReached
        )
      );
  }

  makeOffer(
    id: string,
    amount: number
  ): Observable<Object> {
    return this.http.post(
      `http://localhost:3030/api/properties/${id}/make-offer`,
      { amount: amount }
    );
  }
}
