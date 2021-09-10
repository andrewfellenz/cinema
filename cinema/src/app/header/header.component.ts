import { Component, OnInit } from "@angular/core";

@Component({
  selector: "cin-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  buttons: any = [];

  constructor() {}

  ngOnInit(): void {}
}
