import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { Showing } from "src/app/data-models/showing";
import { ShowingsService } from "src/app/services/showings.service";

@Component({
  selector: "cin-showing-details",
  templateUrl: "./showing-details.component.html",
  styleUrls: ["./showing-details.component.scss"],
})
export class ShowingDetailsComponent implements OnInit {
  showing: Showing;
  id: number;

  constructor(
    private showingsService: ShowingsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params.id;
    });
    this.showingsService
      .getShowingById(this.id)
      .subscribe((showing) => (this.showing = showing));
  }
}
