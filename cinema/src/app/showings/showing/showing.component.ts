import { Component, Input, OnInit } from "@angular/core";
import { Showing } from "src/app/data-models/showing";
import { Film, rating } from "../../data-models/film";

@Component({
  selector: "cin-showing",
  templateUrl: "./showing.component.html",
  styleUrls: ["./showing.component.scss"],
})
export class ShowingComponent implements OnInit {
  @Input() film: Film = {
    title: "Title",
    rating: rating.R,
    genre: "Genre",
    runTime: 90,
    director: "Mel Gibson",
    star: "Josh Brolin",
    description: "A movie about Scottish people.",
  };

  @Input() showing: Showing;

  constructor() {}

  ngOnInit(): void {
    console.log("this is the real: ", this.showing);
  }
}
