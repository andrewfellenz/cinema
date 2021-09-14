import { Component, OnInit } from '@angular/core';
import { Film } from '../data-models/film';
import { FilmsService } from '../services/films.service';

@Component({
  selector: 'cin-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  allFilms: Film;

  constructor(private filmsService: FilmsService) { }

  ngOnInit(): void {
    this.filmsService.getFilms().subscribe((films: Film) => {
      this.allFilms = films;
    })
  }
}

