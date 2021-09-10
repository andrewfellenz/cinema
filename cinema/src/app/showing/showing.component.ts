import { Component, OnInit } from "@angular/core";

@Component({
  selector: "cin-showing",
  templateUrl: "./showing.component.html",
  styleUrls: ["./showing.component.scss"],
})
export class ShowingComponent implements OnInit {
  over() {
    console.log("over");
  }

  leave() {
    console.log("out");
  }

  constructor() {}

  ngOnInit(): void {}
}
