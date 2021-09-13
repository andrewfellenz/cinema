import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Theatre } from "../data-models/theatre";

@Injectable({
  providedIn: "root",
})
export class TheatresService {
  private theatresUrl: string = "http://localhost:8082/api/theatres";
  private jsonContentTypeHeaders = {
    headers: new HttpHeaders().set("Content-Type", "application/json"),
  };
  private errorMessage: string;

  constructor(private http: HttpClient) {}

  getTheatres(): Observable<Theatre> {
    const theatres: Observable<Theatre> = this.http.get<Theatre>(
      this.theatresUrl
    );
    console.log(`getTheatres() returned ${theatres}`);
    return theatres;
  }

  gettheatreById(id: number): Observable<Theatre> {
    const theatre: Observable<Theatre> = this.http.get<Theatre>(
      `${this.theatresUrl}/${id}`
    );
    console.log(`getTheatreById(${id}) returned ${theatre}`);
    return theatre;
  }
}
