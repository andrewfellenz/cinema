import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Viewer } from "../data-models/viewer";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private user: BehaviorSubject<Viewer>;
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

  signIn(email: string, password: string): Observable<Viewer> {
    const results: Observable<Viewer> = this.http.get<Viewer>(
      `${this.viewersUrl}/${email}/${password}`
    );
    console.log(`getShowingByEmail(${email}) returned ${results}`);
    return results;
  }

  setUser(user: Viewer): void {
    this.user = new BehaviorSubject(user);
  }

  getUser(): BehaviorSubject<Viewer> {
    return this.user;
  }
}
