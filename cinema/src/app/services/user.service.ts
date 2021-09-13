import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Viewer } from "../data-models/viewer";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private manager: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private viewer: Viewer;

  isManager(): Observable<Boolean> {
    return this.manager;
  }

  managerLogin(): void {}

  constructor() {}
}
