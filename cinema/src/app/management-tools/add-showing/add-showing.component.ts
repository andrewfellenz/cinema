import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
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

  addShowingForm: FormGroup;

  constructor(
    private showingsService: ShowingsService,
    private filmsService: FilmsService,
    private theatresService: TheatresService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.addShowingForm = formBuilder.group(
      {
        film: [null, Validators.required],
        theatre: [null, Validators.required],
        time: [null, Validators.required],
      }
    );
  }

  ngOnInit(): void {
    this.filmsService.getFilms().subscribe((film) => (this.films = film));
    this.theatresService
      .getTheatres()
      .subscribe((theatre) => (this.theatres = theatre));
    this.addShowingForm.valueChanges.subscribe(console.log);
  }

  onSubmit(formValues) {
    this.addShowing(formValues);
  }

  addShowing(formValues): void {
    this.showing.id = 0;
    this.showing.ticketPrice = 0;
    this.showing.time = formValues.time;
    this.showing.ticketPrice = 13;
    this.theatresService.gettheatreById(formValues.theatre).subscribe((theatre) => (this.showing.theatre = theatre));
    this.filmsService
      .getFilmById(formValues.film)
      .subscribe(
        (film) => (this.showing.film = film),
        () => "",
        () => {
          this.showingsService.addShowing(this.showing).subscribe();
        }
      );
    this.router.navigate(['/management-tools'])
  }
}
