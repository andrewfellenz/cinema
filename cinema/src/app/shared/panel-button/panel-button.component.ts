import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "cin-panel-button",
  templateUrl: "./panel-button.component.html",
  styleUrls: ["./panel-button.component.scss"],
})
export class PanelButtonComponent implements OnInit {
  @Input() panelButtonText: string = "Panel Button Text";

  constructor() {}

  ngOnInit(): void {}
}
