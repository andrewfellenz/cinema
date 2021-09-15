import { Component, OnInit } from "@angular/core";

@Component({
  selector: "cin-theatres",
  templateUrl: "./theatres.component.html",
  styleUrls: ["./theatres.component.scss"],
})
export class TheatresComponent implements OnInit {
  maximumOccupancy: number = 80;
  tickets: number = 0;
  rows: string[] = Array.from("ABCDEFGH");
  seats: number[] = [...Array(this.maximumOccupancy / 8).keys()];

  constructor() {}

  ngOnInit(): void {}
}
