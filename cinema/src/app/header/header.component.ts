import { HeaderService } from "./../services/header.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "cin-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  buttons: any = [];
  subtitle: string;

  constructor(private headerService: HeaderService) {
    this.headerService.headerSubtitle.subscribe(
      (subtitle) => (this.subtitle = subtitle)
    );
  }

  ngOnInit(): void {}
}
