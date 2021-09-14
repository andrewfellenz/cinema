import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Film } from "src/app/data-models/film";
import { Showing } from "src/app/data-models/showing";
import { Theatre } from "src/app/data-models/theatre";
import { FilmsService } from "src/app/services/films.service";
import { ShowingsService } from "src/app/services/showings.service";
import { TheatresService } from "src/app/services/theatres.service";

@Component({
  selector: "cin-add-showing",
  templateUrl: "./add-showing.component.html",
  styleUrls: ["./add-showing.component.scss"],
})
export class AddShowingComponent implements OnInit {
  films: Film;
  theatres: Theatre;
  showing = new Showing();

  addShowingForm = new FormGroup({
    film: new FormControl(""),
    theatre: new FormControl(""),
    time: new FormControl(""),
  });

  constructor(
    private showingsService: ShowingsService,
    private filmsService: FilmsService,
    private theatresService: TheatresService
  ) {}

  ngOnInit(): void {
    this.filmsService.getFilms().subscribe((film) => (this.films = film));
    this.theatresService
      .getTheatres()
      .subscribe((theatre) => (this.theatres = theatre));
  }

  addShowing(): void {
    this.showing.id = 0;
    this.showing.ticketPrice = 0;
    this.showing.time = this.addShowingForm.get("time").value;
     console.log(this.addShowingForm.get("time").value);
    this.showing.ticketPrice = 13;
    this.theatresService.gettheatreById(this.addShowingForm.get("theatre").value).subscribe((theatre) => (this.showing.theatre = theatre));
    this.filmsService
      .getFilmById(this.addShowingForm.get("film").value)
      .subscribe(
        (film) => (this.showing.film = film),
        () => "",
        () => {
          this.showingsService.addShowing(this.showing).subscribe();
        }
      );
  }
}
