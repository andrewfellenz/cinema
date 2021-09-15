import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Film } from "src/app/data-models/film";
import { Showing } from "src/app/data-models/showing";
import { Theatre } from "src/app/data-models/theatre";
import { FilmsService } from "src/app/services/films.service";
import { TheatresService } from "src/app/services/theatres.service";

@Component({
  selector: "cin-showing",
  templateUrl: "./showing.component.html",
  styleUrls: ["./showing.component.scss"],
})
export class ShowingComponent implements OnInit {
  @Input() showing: Showing;
  @Input() manager: boolean;
  editMode: boolean = false;
  films: Film;
  theatres: Theatre;

  editedFilmId: number;

  constructor(
    private filmsService: FilmsService,
    private theatresService: TheatresService
  ) {}

  @Output() deleteShowingEvent = new EventEmitter<Showing>();
  @Output() updateShowingEvent = new EventEmitter<Showing>();

  editSave(showing: Showing) {
    if (this.editMode === true) {
      console.log("Edited ID:", this.editedFilmId);
      //this.updateShowingEvent.emit(showing);
      console.log("It's working");
    }
    this.editMode = !this.editMode;
  }

  deleteShowing(showing: Showing) {
    this.deleteShowingEvent.emit(showing);
  }

  ngOnInit(): void {
    this.filmsService.getFilms().subscribe((film) => (this.films = film));
    this.theatresService
      .getTheatres()
      .subscribe((theatre) => (this.theatres = theatre));
  }
}
