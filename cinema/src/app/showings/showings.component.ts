import { Component, OnInit } from "@angular/core";
import { Showing } from "../data-models/showing";
import { ShowingsService } from "../services/showings.service";

@Component({
  selector: "cin-showings",
  templateUrl: "./showings.component.html",
  styleUrls: ["./showings.component.scss"],
})
export class ShowingsComponent implements OnInit {
  allShowings: Showing;

  constructor(private showingsService: ShowingsService) {}

  ngOnInit(): void {
    this.showingsService.getShowings().subscribe((showings: Showing) => {
      this.allShowings = showings;
    });
  }
}
