import { HeaderService } from "./../../services/header.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "cin-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"],
})
export class SignInComponent implements OnInit {
  constructor(private headerService: HeaderService) {}

  ngOnInit(): void {
    this.headerService.changeSubtitle("Sign In");
  }
}
