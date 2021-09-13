import { Component, Input, OnInit } from "@angular/core";
import { Showing } from "src/app/data-models/showing";

@Component({
  selector: "cin-showing",
  templateUrl: "./showing.component.html",
  styleUrls: ["./showing.component.scss"],
})
export class ShowingComponent implements OnInit {
  @Input() showing: Showing;

  constructor() {}

  ngOnInit(): void {}
}
