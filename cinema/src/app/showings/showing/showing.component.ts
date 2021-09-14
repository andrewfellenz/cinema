import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Showing } from "src/app/data-models/showing";
import { ShowingsService } from "src/app/services/showings.service";

@Component({
  selector: "cin-showing",
  templateUrl: "./showing.component.html",
  styleUrls: ["./showing.component.scss"],
})
export class ShowingComponent implements OnInit {
  @Input() showing: Showing;
  @Input() manager: boolean;

  constructor() {}

  @Output() deleteShowingEvent = new EventEmitter<Showing>();

  deleteShowing(showing: Showing) {
    this.deleteShowingEvent.emit(showing);
  }

  ngOnInit(): void {}
}
