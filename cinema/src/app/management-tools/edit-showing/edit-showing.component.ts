import { Component, OnInit } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Showing } from "src/app/data-models/showing";
import { ShowingsService } from "src/app/services/showings.service";

@Component({
  selector: "cin-edit-showing",
  templateUrl: "./edit-showing.component.html",
  styleUrls: ["./edit-showing.component.scss"],
})
export class EditShowingComponent implements OnInit {
  allShowings: Showing;

  constructor(private showingsService: ShowingsService) {}

  deleteShowing(showing: Showing): void {
    this.showingsService.deleteShowingById(showing.id).subscribe();
    console.log(this.allShowings);
    this.showingsService
      .getShowings()
      .subscribe((showings) => (this.allShowings = showings));
  }

  ngOnInit(): void {
    this.showingsService
      .getShowings()
      .subscribe((showings) => (this.allShowings = showings));
  }
}
