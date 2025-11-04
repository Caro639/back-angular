import {
  inject,
  Injectable,
} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {
  HousingPropertyPreview,
  HousingPropertyWithDetails,
} from "../models/housing-property";

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
}
