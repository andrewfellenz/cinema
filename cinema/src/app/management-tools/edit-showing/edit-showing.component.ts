import { Component, OnInit } from "@angular/core";
import { Showing } from "src/app/data-models/showing";
import { HeaderService } from "src/app/services/header.service";
import { ShowingsService } from "src/app/services/showings.service";

@Component({
  selector: "cin-edit-showing",
  templateUrl: "./edit-showing.component.html",
  styleUrls: ["./edit-showing.component.scss"],
})
export class EditShowingComponent implements OnInit {
  allShowings: Showing;

  constructor(
    private headerService: HeaderService,
    private showingsService: ShowingsService
  ) {}

  updateShowing(showing: Showing): void {
    this.showingsService.updateShowing(showing).subscribe();
    console.log("updating showing in edit component:", showing);
  }

  // Think of a way to do with behavior subject
  deleteShowing(showing: Showing): void {
    this.showingsService
      .deleteShowingById(showing.id)
      .subscribe(() =>
        this.showingsService
          .getShowings()
          .subscribe((showings) => (this.allShowings = showings))
      );
    console.log(this.allShowings);
  }

  ngOnInit(): void {
    this.headerService.changeSubtitle("Edit Showing");
    this.showingsService
      .getShowings()
      .subscribe((showings) => (this.allShowings = showings));
  }
}
