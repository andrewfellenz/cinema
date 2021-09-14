import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Showing } from "../data-models/showing";

@Injectable({
  providedIn: "root",
})
export class ShowingsService {
  private showingsUrl: string = "http://localhost:8082/api/showings";
  private jsonContentTypeHeaders = {
    headers: new HttpHeaders().set("Content-Type", "application/json"),
  };
  private errorMessage: string;

  constructor(private http: HttpClient) {}

  getShowings(): Observable<Showing> {
    const showings: Observable<Showing> = this.http.get<Showing>(
      this.showingsUrl
    );
    console.log(`getShowings() returned ${showings}`);
    return showings;
  }

  getShowingById(id: number): Observable<Showing> {
    const showing: Observable<Showing> = this.http.get<Showing>(
      `${this.showingsUrl}/${id}`
    );
    console.log(`getShowingById(${id}) returned ${showing}`);
    return showing;
  }

  addShowing(showing: Showing): Observable<Showing> {
    const results: Observable<Showing> = this.http.post<Showing>(
      this.showingsUrl,
      showing,
      this.jsonContentTypeHeaders
    );
    console.log(`addShowing(${showing}) returned ${results}`);
    return results;
  }

  deleteShowingById(showingId: number) {
    const results: Observable<Showing> = this.http.delete<Showing>(
      `${this.showingsUrl}/${showingId}`
    );
    console.log(`deleteShowingById(${showingId}) returned ${results}`);
    return results;
  }
}
