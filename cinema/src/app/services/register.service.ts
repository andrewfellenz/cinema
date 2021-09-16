import { Viewer } from "./../data-models/viewer";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class RegisterService {
  private viewersUrl: string = "http://localhost:8082/api/viewers";
  private jsonContentTypeHeaders = {
    headers: new HttpHeaders().set("Content-Type", "application/json"),
  };
  private errorMessage: string;

  constructor(private http: HttpClient) {}

  registerViewer(viewer: Viewer): Observable<Viewer> {
    const results: Observable<Viewer> = this.http.post<Viewer>(
      this.viewersUrl,
      viewer,
      this.jsonContentTypeHeaders
    );
    console.log(`registerViewer(${viewer}) returned ${results}`);
    return results;
  }
}
