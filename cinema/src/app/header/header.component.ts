import { HeaderService } from "./../services/header.service";
import { Component, OnInit } from "@angular/core";
import { Viewer } from "../data-models/viewer";

@Component({
  selector: "cin-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  currentUser: Viewer;
  subtitle: string;

  constructor(private headerService: HeaderService) {}

  ngOnInit(): void {
    this.headerService.headerSubtitle.subscribe(
      (subtitle) => (this.subtitle = subtitle)
    );
  }
}
