import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HeaderService {
  headerSubtitle: Subject<string> = new Subject<string>();

  changeSubtitle(newSubtitle: any): void {
    this.headerSubtitle.next(` - ${newSubtitle}`);
  }

  constructor() {}
}
