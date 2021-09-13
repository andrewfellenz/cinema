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
}
