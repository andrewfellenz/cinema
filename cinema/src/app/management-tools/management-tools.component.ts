import { HeaderService } from "./../services/header.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "cin-management-tools",
  templateUrl: "./management-tools.component.html",
  styleUrls: ["./management-tools.component.scss"],
})
export class ManagementToolsComponent implements OnInit {
  constructor(private headerService: HeaderService) {}

  ngOnInit(): void {
    this.headerService.changeSubtitle("Manager Tools");
  }
}
