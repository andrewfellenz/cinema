import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Film } from "../data-models/film";

@Injectable({
  providedIn: "root",
})
export class FilmsService {
  private filmsUrl: string = "http://localhost:8082/api/films";
  private jsonContentTypeHeaders = {
    headers: new HttpHeaders().set("Content-Type", "application/json"),
  };
  private errorMessage: string;
  constructor(private http: HttpClient) {}

  getFilms(): Observable<Film> {
    const films: Observable<Film> = this.http.get<Film>(this.filmsUrl);
    console.log(`getFilms() returned ${films}`);
    return films;
  }

  getFilmById(id: number): Observable<Film> {
    const film: Observable<Film> = this.http.get<Film>(
      `${this.filmsUrl}/${id}`
    );
    console.log(`getFilmById(${id}) returned ${film}`);
    return film;
  }
}
