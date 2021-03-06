import { HeaderService } from "./../services/header.service";
import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";

@Component({
  selector: "cin-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor(
    private userService: UserService,
    private headerService: HeaderService
  ) {}

  ngOnInit(): void {
    this.headerService.changeSubtitle("Home");
  }
}
