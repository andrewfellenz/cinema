import { HeaderService } from "./../services/header.service";
import { Component, OnInit } from "@angular/core";
import { Film } from "../data-models/film";
import { FilmsService } from "../services/films.service";

@Component({
  selector: "cin-films",
  templateUrl: "./films.component.html",
  styleUrls: ["./films.component.scss"],
})
export class FilmsComponent implements OnInit {
  allFilms: Film;

  constructor(
    private filmsService: FilmsService,
    private headerService: HeaderService
  ) {}

  ngOnInit(): void {
    this.headerService.changeSubtitle("All Films");
    this.filmsService.getFilms().subscribe((films: Film) => {
      this.allFilms = films;
    });
  }
}
